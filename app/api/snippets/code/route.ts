import { databaseConnection } from "@/lib/backend/db/cs";
import {
  deleteCodeObjectById,
  deleteCodeSnippetById,
} from "@/lib/backend/models/snippets/services/lib";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest, res: NextResponse) {
  try {
    await databaseConnection();
    const body = await req.json();
    const { snippetId, codeId } = body;

    if (!snippetId || !codeId) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "Provide a code & object ID",
        }),
        { status: 404 }
      );
    }

    const res = await deleteCodeObjectById(snippetId, codeId);
    if (res.code.length === 0 || res.code.length < 0) {
      await deleteCodeSnippetById(codeId);
    }

    return new NextResponse(
      JSON.stringify({
        success: true,
        message: "Snippet deleted successfully",
        data: res,
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
