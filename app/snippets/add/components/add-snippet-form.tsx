"use client";

import { useFormStatus } from "react-dom";
import clsx from "clsx";

import CodeEditor from "./code-editor";
import AddEditorBtn from "./add-editor";
import { cn } from "@/lib/utils";
import ErrorMessage from "@/components/custom/error-message";
import useUploadSnippet from "../hooks/useUploadSnippet";
import BtnLoader from "@/components/custom/btn-loader";

const inputClass =
  "w-full rounded-md border border-primary bg-secondary p-2 focus:border-none";

function Button() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className={cn(
        "mt-4 bg-secondary border border-primary   p-2 rounded-md cursor-pointer hover:bg-hover"
      )}
    >
      {pending ? <BtnLoader /> : "Post snippet "}
    </button>
  );
}
export default function Form() {
  const {
    editor,
    handleLanguageSelect,
    handleHeadingChange,
    handleCodeChange,
    // theme,
    handleDelete,
    handleSubmit,
    handleAdd,
    message,
  } = useUploadSnippet();
  return (
    <form action={handleSubmit} className="flex w-full   flex-col gap-2 py-4">
      <input
        name="title"
        type="text"
        placeholder="Title"
        required
        className={inputClass}
      />
      <textarea
        rows={3}
        cols={5}
        name="description"
        required
        placeholder="Description"
        className={inputClass}
      />
      {/* <span className="border border-primary" /> */}
      <CodeEditor
        editor={editor}
        handleLanguageSelect={handleLanguageSelect}
        handleHeadingChange={handleHeadingChange}
        handleCodeChange={handleCodeChange}
        // theme={theme}
        handleDelete={handleDelete}
      />
      <AddEditorBtn handleAdd={handleAdd} />

      {message ? <ErrorMessage message={message} /> : null}

      <Button />
    </form>
  );
}
