import { databaseConnection } from "@/lib/backend/db/cs";
import { updateSnippetCount } from "@/lib/backend/models/snippets/services/lib";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await databaseConnection();
    const body = await req.json();
    const { id }: any = body;

    if (!id) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "Provide a snippet ID",
        }),
        { status: 500 }
      );
    }

    const updatedSnippet = await updateSnippetCount(id);

    if (!updatedSnippet) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "The snippet does not exist",
        }),
        { status: 500 }
      );
    }

    return new NextResponse(
      JSON.stringify({
        success: true,
        data: updatedSnippet,
      }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: `DBerror: ${error.message}`,
        data: error,
      })
    );
  }
}
