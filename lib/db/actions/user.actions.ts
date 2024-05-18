"use server";

import { connectDb } from "../db";
import { ClerkUserModel } from "../models/user.modals";

export async function createUser(user: any) {
  try {
    await connectDb();
    const newUser = await ClerkUserModel.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log("error occured creating user", error);
  }
}
