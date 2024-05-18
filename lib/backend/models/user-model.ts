import mongoose from "mongoose";
import { ClerkUser } from "../types/backend";

// creating the clerk user
const clerkUserSchema = new mongoose.Schema<ClerkUser>({
  clerkId: { type: String, required: true, unique: true },
  username: { type: String, required: false },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  photo: { type: String, required: true },
});

const ClerkUserModel =
  mongoose.models.ClerkUser || mongoose.model("ClerkUser", clerkUserSchema);
export { ClerkUserModel };
