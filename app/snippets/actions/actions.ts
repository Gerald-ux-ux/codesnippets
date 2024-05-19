"use server";

import { getUserSession } from "@/lib/backend/actions/user-actions";
import { errorMessage } from "@/lib/secrete";
import axios from "axios";
import { revalidateTag } from "next/cache";
const API_URL = "http://localhost:3000/api/snippets/create";
const GET_SNIPPETS = "http://localhost:3000/api/snippets/fetch";
const Give_Feedback = "http://localhost:3000/api/feedback";
const Copy_Snippet = "http://localhost:3000/api/snippets/clone";
const Delete_Snippet = (id: string) =>
  `http://localhost:3000/api/snippets/delete/${id}`;
const Delete_Code = "http://localhost:3000/api/snippets/code";
export async function getCodeSnippets(): Promise<any[]> {
  try {
    const res = await fetch(GET_SNIPPETS, { next: { tags: ["code"] } });

    // console.log("res", res);
    const data = await res.json();
    return data?.data;
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
    console.log("error", error.response.data);
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

export async function deleteCode(id: any, objId: any) {
  try {
    const headers = await getUserSession();
    const headerValue = headers?.value;

    console.log('d', id)

    const data = {
      code_id: id._id,
      object_id: objId,
    };

    console.log("data", data);

    const res = await axios.delete(Delete_Code, {
      data: data,
      headers: {
        Authorization: `Bearer ${headerValue}`,
      },
    });

    console.log("data", data);

    revalidateTag("code");
    return res?.data;
  } catch (error: any) {
    return error?.response?.data || errorMessage;
  }
}

export async function deleteSnippet(id: string) {
  try {
    const headers = await getUserSession();
    const headerValue = headers?.value;

    const res = await axios.delete(Delete_Snippet(id), {
      headers: {
        Authorization: `Bearer ${headerValue}`,
      },
    });

    console.log("res", res);
    revalidateTag("code");
    return res?.data;
  } catch (error: any) {
    console.log("errr", error);
    return error?.response?.data || errorMessage;
  }
}
