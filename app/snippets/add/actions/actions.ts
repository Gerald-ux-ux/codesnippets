"use server";

import { getUserSession } from "@/lib/backend/actions/user-actions";
import { errorMessage } from "@/lib/secrete";
import axios from "axios";
import { revalidateTag } from "next/cache";
const API_URL = "http://localhost:3000/api/snippets/create"; // Ensure this matches your server's URL

export async function postCodeSnippet(formData: FormData, editor: any) {
  try {
    const headers = await getUserSession();
    const headerValue = headers?.value;

    console.log("headers: ", headers?.value);
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

    console.log("data", data);

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
