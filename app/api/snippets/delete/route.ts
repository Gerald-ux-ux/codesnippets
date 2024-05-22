import { databaseConnection } from "@/lib/backend/db/cs";
import {
  deleteCodeSnippetById,
  getCodeSnippetById,
} from "@/lib/backend/models/snippets/services/lib";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
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

    const snippetExists = await getCodeSnippetById(id);

    if (!snippetExists) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "The snippet you are trying to delete does not exist",
        }),
        { status: 404 }
      );
    }

    await deleteCodeSnippetById(id);

    return new NextResponse(
      JSON.stringify({
        success: true,
        message: "Snippet deleted successfully",
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
  } finally {
  }
}
