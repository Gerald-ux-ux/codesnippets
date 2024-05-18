import mongoose from "mongoose";

interface ClerkUserModel {
  clerkId: string;
  first_name: string;
  last_name: string;
  email: string;
  photo: string;
  username: string;
}

// creating the clerk user
const clerkUserSchema = new mongoose.Schema<ClerkUserModel>({
  clerkId: { type: String, required: true, unique: true },
  username: { type: String, required: false },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  photo: { type: String, required: true },
});

export const ClerkUserModel = mongoose.model("ClerkUser", clerkUserSchema);
