"use server";
import { ObjectId } from "mongodb";
import { v4 as uuidv4 } from "uuid";
import { errorMessage } from "@/lib/secrete";
import axios from "axios";
import { revalidatePath } from "next/cache";
import { baseUrl } from "../../api/baseUrl";
import clientPromise from "@/lib/backend/db/cs";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { Snippet } from "../types/types";

const Give_Feedback = `${baseUrl}/api/code-snippets/feedback`;

/**
 *
 * @this
 * Server actions, not traditional unnecessary api routes lol.
 */
export async function getSnippetSlug(params: string): Promise<Snippet> {
  try {
    const client = await clientPromise;
    const db = client.db("clerk-next-14-db");
    const snippet = await db
      .collection("snippets")
      .findOne({ _id: new ObjectId(params) });
    const plainObjs = JSON.parse(JSON.stringify(snippet));
    return plainObjs;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
export async function getCodeSnippets(): Promise<Snippet[]> {
  try {
    const client = await clientPromise;
    const db = client.db("clerk-next-14-db");
    const snippets = await db.collection("snippets").find({}).toArray();

    const plainObjs = JSON.parse(JSON.stringify(snippets));

    return plainObjs;
  } catch (error: any) {
    console.error("Error fetching snippets:", error);
    throw new Error(error.message);
  }
}

export async function getSnippetByUserId(): Promise<Snippet[]> {
  try {
    const client = await clientPromise;
    const db = client.db("clerk-next-14-db");

    const { userId } = auth();
    const userSnippets = await db
      .collection("snippets")
      .find({ "author.id": userId })
      .toArray();
    const plainObjs = JSON.parse(JSON.stringify(userSnippets));
    return plainObjs;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

type FeedBack = {
  from: FormDataEntryValue | null;
  text: FormDataEntryValue | null;
};
export async function submitFeedBack(formData: FormData) {
  try {
    const data: FeedBack = {
      from: formData.get("from"),
      text: formData.get("text"),
    };

    const res = await axios.post(Give_Feedback, data);
    return res?.data;
  } catch (error: any) {
    return error?.response?.data || errorMessage;
  }
}

export async function postCodeSnippet(formData: FormData, editor: any) {
  try {
    const client = await clientPromise;
    const db = client.db("clerk-next-14-db");
    const sanitizedSnippet = editor.map((code: any) => ({
      _id: uuidv4(),
      heading: code.heading,
      language: code.lang.label,
      content: code.code,
    }));
    const data = {
      title: formData.get("title"),
      description: formData.get("description"),
      code: sanitizedSnippet,
    };

    if (!data) {
      return {
        success: false,
        message: "Fill in all the required fields",
      };
    }

    const { userId } = auth();
    const user = await clerkClient.users.getUser(userId!);

    const author = {
      id: user.id,
      first_name: user?.firstName,
      last_name: user?.lastName,
      email: user.primaryEmailAddress?.emailAddress,
      photo: user.imageUrl,
    };

    const dataSaved = {
      title: data.title,
      description: data.description,
      code: data.code,
      author: author,
      copy_count: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const newCodeSnippet = await db.collection("snippets").insertOne(dataSaved);

    const plainObjs = JSON.parse(JSON.stringify(newCodeSnippet));
    revalidatePath("/snippets");
    return {
      success: true,
      message: "Snippet created successfully",
      data: plainObjs,
    };
  } catch (error: any) {
    return error?.response?.data || errorMessage;
  }
}

export async function editCodeSnippet(
  formData: FormData,
  editor: any,
  id: string
) {
  try {
    const client = await clientPromise;
    const db = client.db("clerk-next-14-db");

    const sanitizedSnippet = editor.map((code: any) => ({
      _id: code._id,
      heading: code.heading,
      language: code.lang.label,
      content: code.code,
    }));
    const data = {
      title: formData.get("title"),
      description: formData.get("description"),
      code: sanitizedSnippet,
      id: id,
    };

    const { userId } = auth();

    const user = await clerkClient.users.getUser(userId!);
    const author = {
      id: user.id,
      first_name: user.firstName,
      last_name: user?.lastName,
      email: user.primaryEmailAddress?.emailAddress,
      photo: user?.imageUrl,
    };

    const newData = {
      title: data.title,
      description: data.description,
      code: data.code,
      author: author,
    };

    const newCodeSnippet = await db
      .collection("snippets")
      .updateOne({ _id: new ObjectId(id) }, { $set: newData });
    revalidatePath("/snippets[slug]/page");
    return {
      success: true,
      data: newCodeSnippet,
    };
  } catch (error: any) {
    return error?.response?.data || errorMessage;
  }
}

export async function copySnippet(id: string) {
  try {
    const client = await clientPromise;
    const db = client.db("clerk-next-14-db");

    if (!id) {
      return {
        success: false,
        message: "Provide an id",
      };
    }

    const updatedSnippet = await db.collection("snippets").findOneAndUpdate(
      { "code._id": id },
      { $inc: { copy_count: 1 } },
      // Returns the new value after incrementing the copy count
      { returnDocument: "after" }
    );

    const plainObjs = JSON.parse(JSON.stringify(updatedSnippet));
    revalidatePath("/snippets[slug]/page");
    return {
      success: true,
      data: plainObjs,
    };
  } catch (error: any) {
    return error?.response?.data || errorMessage;
  }
}

export async function deleteSnippet(codeId: any, snippetId: any) {
  try {
    const client = await clientPromise;
    const db = client.db("clerk-next-14-db");

    if (!codeId || !snippetId) {
      return {
        success: false,
        message: "Provide an id",
      };
    }

    const deletedSnippets = await db.collection("snippets").findOneAndUpdate(
      { _id: new ObjectId(codeId) },
      // @ts-ignore
      { $pull: { code: { _id: snippetId } } },
      { returnDocument: "after" }
    );

    const deletedSnippetObj = JSON.parse(JSON.stringify(deletedSnippets));
    if (
      deletedSnippetObj.code.length === 0 ||
      deletedSnippetObj.code.length < 0
    ) {
      await db.collection("snippets").deleteOne({ _id: new ObjectId(codeId) });
      revalidatePath("/snippets");
    }

    revalidatePath("/snippets/[slug]/page");
    return {
      success: true,
      data: deletedSnippetObj,
    };
  } catch (error: any) {
    return {
      success: false,
      message: `DBerror: ${error.message}`,
      data: error,
    };
  }
}

export async function deleteCode(id: any) {
  try {
    const client = await clientPromise;
    const db = client.db("clerk-next-14-db");
    if (!id) {
      return {
        success: false,
        message: "Provide an id",
      };
    }

    const res = await db
      .collection("snippets")
      .deleteOne({ _id: new ObjectId(id) });
    revalidatePath("/snippets");
    return {
      success: true,
      data: res,
    };
  } catch (error: any) {
    return {
      success: false,
      message: `DBerror: ${error.message}`,
      data: error,
    };
  }
}
