import { databaseConnection } from "@/lib/backend/db/cs";
import { createCodeSnippet } from "@/lib/backend/models/snippets/services/lib";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    await databaseConnection();

    const body = await req.json();

    const { title, description, code }: any = body;

    if (!title || !description || !code) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "Fill in all the required fields",
        }),
        { status: 400 }
      );
    }

    const { userId } = auth();

    if (!userId) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "You are not logged in",
        }),
        { status: 401 }
      );
    }

    const user = await clerkClient.users.getUser(userId);

    const author = {
      id: user.id,
      first_name: user.firstName,
      last_name: user.lastName,
      email: user.primaryEmailAddress?.emailAddress,
    };

    const data = {
      title,
      description,
      code,
      author,
    };

    const newCodeSnippet = await createCodeSnippet({ ...data });

    return new NextResponse(
      JSON.stringify({
        success: true,
        message: "Snippet created successfully",
        data: newCodeSnippet,
      }),
      { status: 201 }
    );
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: error,
      }),
      { status: 500 }
    );
  }
}
