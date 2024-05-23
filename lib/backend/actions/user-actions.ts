"use server";

import { ClerkUser } from "../types/backend";
import clientPromise from "../db/cs";

export async function createUser(user: ClerkUser) {
  try {
    const client = await clientPromise;
    const db = client.db("clerk-next-14-db");
    const newUser = await db.collection("clerkusers").insertOne(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error: any) {
    console.log("error creating user", error);
  }
}
