"use client";
import CodeEditor from "./code-editor";
import AddEditorBtn from "./add-editor";
import ErrorMessage from "@/components/custom/error-message";
import useUploadSnippet from "../hooks/useUploadSnippet";
import { FormButton } from "@/components/custom/form-button";
import { formBtn } from "@/app/styles/styles";

const inputClass =
  "w-full rounded-md border border-primary bg-secondary p-2 focus:border-none";

export default function Form() {
  const {
    editor,
    handleLanguageSelect,
    handleHeadingChange,
    handleCodeChange,
    handleDelete,
    handleSubmit,
    handleAdd,
    message,
  } = useUploadSnippet({});
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
      <CodeEditor
        editor={editor}
        handleLanguageSelect={handleLanguageSelect}
        handleHeadingChange={handleHeadingChange}
        handleCodeChange={handleCodeChange}
        handleDelete={handleDelete}
      />
      <AddEditorBtn handleAdd={handleAdd} />

      {message ? <ErrorMessage message={message} /> : null}
      <FormButton name="Post snippets" className={formBtn} />
    </form>
  );
}
