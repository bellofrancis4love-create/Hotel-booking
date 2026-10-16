
import User from "../models/users.js";
import { Webhook } from "svix";

const clerkWebhooks = async (req, res) => {
  try {
    const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;

    if (!webhookSecret) {
      return res.status(500).json({
        success: false,
        message: "Clerk webhook secret is missing",
      });
    }

    const whook = new Webhook(webhookSecret);

    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    // Verify the webhook signature.
    // This assumes req.body is the original raw request body.
    const evt = whook.verify(req.body, headers);

    // Get the event information.
    const { data, type } = evt;

    const userData = {
      _id: data.id,
      email: data.email_addresses?.[0]?.email_address,
      username: [data.first_name, data.last_name]
        .filter(Boolean)
        .join(" "),
      image: data.image_url,
    };

    // Handle different Clerk events.
    switch (type) {
      case "user.created":
        await User.create(userData);
        break;

      case "user.updated":
        await User.findByIdAndUpdate(data.id, userData, {
          new: true,
          runValidators: true,
        });
        break;

      case "user.deleted":
        await User.findByIdAndDelete(data.id);
        break;

      default:
        console.log("Unhandled Clerk event:", type);
    }

    return res.status(200).json({
      success: true,
      message: "Webhook received",
    });
  } catch (error) {
    console.error("Clerk webhook error:", error.message);

    return res.status(400).json({
      success: false,
      message: "Webhook verification or processing failed",
    });
  }
};

export default clerkWebhooks;
