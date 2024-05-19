import { databaseConnection } from "@/lib/backend/db/cs";
import { deleteCodeSnippetById } from "@/lib/backend/models/snippets/services/lib";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  try {
    await databaseConnection();
    const { id }: any = req.nextUrl.pathname;

    if (!id) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "Provide a snippet ID",
        }),
        { status: 500 }
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
