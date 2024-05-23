
import { databaseConnection } from "@/lib/backend/db/cs";
import { getCodeSnippets } from "@/lib/backend/models/snippets/services/lib";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    await databaseConnection();

    const snippets = await getCodeSnippets();

    if (!snippets) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "No snippets available, be the first one to add.",
        }),
        { status: 200 }
      );
    }

    return new NextResponse(
      JSON.stringify({
        success: true,
        data: snippets,
      }),
      { status: 200 }
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
