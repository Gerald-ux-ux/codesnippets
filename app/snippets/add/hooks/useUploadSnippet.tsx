"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";
import { values } from "../components/languages";
import { editCodeSnippet, postCodeSnippet } from "../../actions/actions";

export default function useUploadSnippet({
  selectedSnippet,
  action,
  setOpen,
}: {
  selectedSnippet?: any;
  action?: string;
  setOpen?: (value: boolean) => void;
}) {
  const router = useRouter();
  const [message, setMessage] = useState<string>("");
  // Code editor state

  const initialEditorState = selectedSnippet?.code?.map((snippet: any) => ({
    heading: snippet.heading,
    lang: { label: snippet.language, value: snippet.language.toLowerCase() },
    code: snippet.content,
  }));
  const [editor, setEditor] = useState(
    selectedSnippet
      ? initialEditorState
      : [
          {
            heading: "",
            lang: values[0],
            code: "",
          },
        ]
  );

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
    setEditor(editor.filter((_: any, i: any) => i !== id));
  };

  const handleSubmit = async (formData: FormData) => {
    if (action === "edit") {
      const id = selectedSnippet._id;
      const res = await editCodeSnippet(formData, editor, id);
      console.log("res", res);
      if (res.success) {
        setOpen!(false);
      } else
        setMessage(res.message || "Error updating snippet, try again later");
      return res;
    } else {
      const res = await postCodeSnippet(formData, editor);

      if (res.success) {
        router.push("/snippets");
      } else
        setMessage(
          res.message || "Error creating code snippet, try again later"
        );
      return res;
    }
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
