"use server";
import { ObjectId } from "mongodb";

import { getUserSession } from "@/lib/backend/actions/user-actions";
import { errorMessage } from "@/lib/secrete";
import axios from "axios";
import { revalidateTag } from "next/cache";
import { baseUrl } from "../../api/baseUrl";
// import { databaseConnection } from "@/lib/backend/db/cs";
import CodeSnippetModel from "@/lib/backend/models/snippets/snippets-model";
import clientPromise from "@/lib/backend/db/cs";
import { convertMongoDocument } from "@/lib/utils";
const url = "https://codesnippets-six.vercel.app/";

const Give_Feedback = `${baseUrl}/api/code-snippets/feedback`;
const Copy_Snippet = `${url}/api/snippets/clone`;
const Delete_Snippet = `${url}/api/snippets/delete/`;
const Delete_Code = `${url}/api/snippets/code`;
const Get_Snippets_ById = `${url}/api/snippets/user/`;
const Edit_Snippet = `${url}/api/snippets/edit`;
const API_URL = `${url}/api/snippets/create`;
const GET_SNIPPETS = `${url}/api/snippets/fetch`;

export async function getSnippetSlug(params: string) {
  try {
    const client = await clientPromise;
    const db = client.db("clerk-next-14-db");
    const snippet = await db
      .collection("snippets")
      .findOne({ _id: new ObjectId(params) });
    const plainObjs = JSON.parse(JSON.stringify(snippet));
    return plainObjs;
  } catch (error: any) {
    return {
      success: false,
      message: `DBerror: ${error.message}`,
      data: error,
    };
  }
}
export async function getCodeSnippets() {
  try {
    const client = await clientPromise;
    const db = client.db("clerk-next-14-db");
    const snippets = await db.collection("snippets").find({}).toArray();

    console.log("snippets", snippets);
    const plainObjs = JSON.parse(JSON.stringify(snippets));

    return {
      success: true,
      data: plainObjs,
    };
  } catch (error: any) {
    console.error("Error fetching snippets:", error);
    return {
      success: false,
      message: `DBerror: ${error.message}`,
      data: error,
    };
  }
}

export async function getSnippetByUserId(userId: string) {
  try {
    const res = await axios.post(Get_Snippets_ById, { userId });
    return res.data?.data;
  } catch (error: any) {
    return error?.response?.data || errorMessage;
  }
}
export async function submitFeedBack(formData: FormData) {
  try {
    const data = {
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
    const headers = await getUserSession();
    const headerValue = headers?.value;
    const sanitizedSnippet = editor.map((code: any) => ({
      heading: code.heading,
      language: code.lang.label,
      content: code.code,
    }));
    const data = {
      title: formData.get("title"),
      description: formData.get("description"),
      code: sanitizedSnippet,
    };

    const res = await axios.post(API_URL, data, {
      headers: {
        Authorization: `Bearer ${headerValue}`,
      },
    });
    revalidateTag("code");
    return res?.data;
  } catch (error: any) {
    console.log("err", error);
    return error?.response?.data || errorMessage;
  }
}

export async function editCodeSnippet(
  formData: FormData,
  editor: any,
  id: string
) {
  try {
    const headers = await getUserSession();
    const headerValue = headers?.value;
    const sanitizedSnippet = editor.map((code: any) => ({
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

    const res = await axios.put(Edit_Snippet, data, {
      headers: {
        Authorization: `Bearer ${headerValue}`,
      },
    });
    revalidateTag("code");
    return res?.data;
  } catch (error: any) {
    return error?.response?.data || errorMessage;
  }
}

export async function copySnippet(id: string) {
  try {
    const data = {
      id: id,
    };
    const res = await axios.post(Copy_Snippet, data);
    revalidateTag("code");
    return res?.data;
  } catch (error: any) {
    return error?.response?.data || errorMessage;
  }
}

export async function deleteSnippet(codeId: any, snippetId: any) {
  try {
    const headers = await getUserSession();
    const headerValue = headers?.value;

    const data = {
      snippetId,
      codeId,
    };

    const res = await axios.delete(Delete_Code, {
      data: data,
      headers: {
        Authorization: `Bearer ${headerValue}`,
      },
    });

    revalidateTag("code");
    return res?.data;
  } catch (error: any) {
    return error?.response?.data || errorMessage;
  }
}

export async function deleteCode(id: any) {
  try {
    const headers = await getUserSession();
    const headerValue = headers?.value;

    const data = {
      id,
    };
    const res = await axios.delete(Delete_Snippet, {
      data: data,
      headers: {
        Authorization: `Bearer ${headerValue}`,
      },
    });

    revalidateTag("code");
    return res?.data;
  } catch (error: any) {
    return error?.response?.data || errorMessage;
  }
}
