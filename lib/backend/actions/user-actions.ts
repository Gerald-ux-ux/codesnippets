"use server";

import { cookies } from "next/headers";
import { databaseConnection } from "../db/cs";
import { ClerkUserModel } from "../models/user-model";
import { ClerkUser } from "../types/backend";
import { NextRequest } from "next/server";
import { clerkClient } from "@clerk/nextjs/server";

export async function createUser(user: ClerkUser) {
  try {
    await databaseConnection();
    const newUser = await ClerkUserModel.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error: any) {
    console.log("error creating user", error);
  }
}

export async function getUserSession() {
  try {
    const cookieStore = cookies();
    const session = cookieStore.get("__session");
    return session;
  } catch (error) {
    console.log("error occured getting session", error);
  }
}


