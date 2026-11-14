import { Webhook } from "svix";
import User from "../models/users.js";

const clerkWebhooks = async (req, res) => {
  const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;

  if (!webhookSecret) {
    console.error("CLERK_WEBHOOK_SECRET is not set");
    return res.status(500).json({ success: false, message: "Server misconfigured" });
  }

  // The body must be the raw Buffer (express.raw on this route)
  if (!Buffer.isBuffer(req.body)) {
    console.error("Webhook body is not a Buffer. Register express.raw() on this route BEFORE express.json().");
    return res.status(500).json({ success: false, message: "Server misconfigured" });
  }

  const svixHeaders = {
    "svix-id": req.headers["svix-id"],
    "svix-timestamp": req.headers["svix-timestamp"],
    "svix-signature": req.headers["svix-signature"],
  };

  if (!svixHeaders["svix-id"] || !svixHeaders["svix-timestamp"] || !svixHeaders["svix-signature"]) {
    return res.status(400).json({ success: false, message: "Missing Svix headers" });
  }

  // 1) Verify signature (400 = bad request, Clerk should not treat as a server fault)
  let evt;
  try {
    const payload = req.body.toString("utf8");
    const wh = new Webhook(webhookSecret);

    // verify() throws if the signature is invalid. Some svix versions don't
    // return the event, so we parse the verified payload ourselves.
    wh.verify(payload, svixHeaders);
    evt = JSON.parse(payload);
  } catch (err) {
    console.error("Clerk webhook signature verification failed:", err.message);
    return res.status(400).json({ success: false, message: "Invalid signature" });
  }

  const { type, data } = evt;
  console.log("Clerk webhook event received:", type);

  // 2) Process the event (500 = our fault, so Clerk retries)
  try {
    switch (type) {
      case "user.created":
      case "user.updated": {
        const email = data.email_addresses?.[0]?.email_address;

        const username =
          [data.first_name, data.last_name].filter(Boolean).join(" ") ||
          data.username ||
          (email ? email.split("@")[0] : "User");

        const userData = {
          email,
          username,
          image: data.image_url,
        };

        // upsert handles both events and out-of-order delivery
        await User.findByIdAndUpdate(
          data.id,
          { $set: userData, $setOnInsert: { _id: data.id } },
          { upsert: true, returnDocument: "after", setDefaultsOnInsert: true, runValidators: true }
        );
        break;
      }

      case "user.deleted":
        // data.id can be undefined on some delete events
        if (data.id) await User.findByIdAndDelete(data.id);
        break;

      default:
        console.log("Unhandled Clerk event:", type);
    }

    return res.status(200).json({ success: true, message: "Webhook processed" });
  } catch (err) {
    console.error("Clerk webhook processing error:", err);
    return res.status(500).json({ success: false, message: "Webhook processing failed" });
  }
};

export default clerkWebhooks;