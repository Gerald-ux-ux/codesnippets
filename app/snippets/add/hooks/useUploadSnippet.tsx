"use client";

import { useState } from "react";

import { redirect, useRouter } from "next/navigation";
import { values } from "../components/languages";
import { postCodeSnippet } from "../actions/actions";

export default function useUploadSnippet() {
  const router = useRouter();
  const [message, setMessage] = useState<string>("");
  // Code editor state
  const [editor, setEditor] = useState([
    {
      heading: "",
      lang: values[0],
      code: "",
    },
  ]);

  const handleLanguageSelect = (
    index: number,
    language: { label: string; value: string }
  ) => {
    const newEditors = [...editor];
    newEditors[index].lang = language;
    setEditor(newEditors);
  };

  const handleHeadingChange = (index: number, newHeading: string) => {
    const newEditors = [...editor];
    newEditors[index].heading = newHeading;
    setEditor(newEditors);
  };
  const handleAdd = (e: any) => {
    e.preventDefault();
    setEditor([...editor, { heading: "", lang: values[0], code: "" }]);
  };

  const handleCodeChange = (index: number, newCode: string) => {
    const newEditors = [...editor];
    newEditors[index].code = newCode;
    setEditor(newEditors);
  };

  const handleDelete = (id: number, e: any) => {
    e.preventDefault();
    setEditor(editor.filter((_, i) => i !== id));
  };

  const handleSubmit = async (formData: FormData) => {
    const res = await postCodeSnippet(formData, editor);
    console.log("res", res);

    if (res.success) {
      // router.push("/code-snippets");
    } else
      setMessage(res.message || "Error creating code snippet, try again later");
    return res;
  };

  return {
    editor,
    handleLanguageSelect,
    handleHeadingChange,
    handleSubmit,
    handleAdd,
    message,
    handleCodeChange,
    handleDelete,
  };
}
