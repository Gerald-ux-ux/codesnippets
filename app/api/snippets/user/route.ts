import { databaseConnection } from "@/lib/backend/db/cs";
import { getCodeSnippetByUserId } from "@/lib/backend/models/snippets/services/lib";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await databaseConnection();

    const body = await req.json();
    const { userId }: any = body;

    if (!userId) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "You must be logged in",
        }),
        { status: 400 }
      );
    }

    const res = await getCodeSnippetByUserId(userId);

    return new NextResponse(
      JSON.stringify({
        success: true,
        data: res,
      })
    );
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: `DBerror: ${error.message}`,
      }),
      { status: 400 }
    );
  }
}
