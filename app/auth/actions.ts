"use server";

import { useClerk } from "@clerk/nextjs";
import { auth, currentUser, getAuth } from "@clerk/nextjs/server";
import { NextApiRequest } from "next";

export async function registerUser() {
  try {
    const { userId } = auth();

    const user = await currentUser();
    console.log("userId", userId);
    console.log("user", user);
  } catch (error) {}
}
