"use server";

import { getUserSession } from "@/lib/backend/actions/user-actions";
import { errorMessage } from "@/lib/secrete";
import axios from "axios";
import { revalidateTag } from "next/cache";
const API_URL = "http://localhost:3000/api/snippets/create";
const GET_SNIPPETS = "http://localhost:3000/api/snippets/fetch";
const Give_Feedback = "http://localhost:3000/api/feedback";

export async function getCodeSnippets(): Promise<any[]> {
  try {
    const res = await fetch(GET_SNIPPETS, { next: { tags: ["code"] } });

    console.log("res", res);
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
