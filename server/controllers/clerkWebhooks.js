
import User from "../models/users.js";
import { Webhook } from "svix";

const clerkWebhooks = async (req, res) => {
  try {
    const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;

    if (!webhookSecret) {
      console.error("Clerk webhook secret is missing");

      return res.status(500).json({
        success: false,
        message: "Clerk webhook secret is missing",
      });
    }

    // Create Svix webhook instance
    const whook = new Webhook(webhookSecret);

    // Get Svix headers
    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    // Ensure the original raw body is available
    if (!Buffer.isBuffer(req.body)) {
      throw new Error(
        "Webhook body is not a Buffer. Check express.raw middleware."
      );
    }

    const payload = req.body.toString("utf8");

    // Verify signature AND receive the verified event
    const evt = whook.verify(payload, headers);

    // Extract event information
    const { data, type } = evt;

    console.log("Clerk webhook event received:", type);

    // Prepare user information
    const userData = {
      _id: data.id,
      email: data.email_addresses?.[0]?.email_address,
      username: [data.first_name, data.last_name]
        .filter(Boolean)
        .join(" "),
      image: data.image_url,
    };

    // Handle different Clerk events
    switch (type) {
      case "user.created":
        await User.findByIdAndUpdate(data.id, userData, {
          upsert: true,
          new: true,
          setDefaultsOnInsert: true,
        });
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
      message: "Webhook received successfully",
    });

  } catch (error) {
    console.error("Clerk webhook error:", error);

    return res.status(400).json({
      success: false,
      message: "Webhook verification or processing failed",
    });
  }
};

export default clerkWebhooks;
