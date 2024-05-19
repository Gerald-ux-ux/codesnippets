"use client";

import React from "react";
import CodeEditor from "../add/components/code-editor";
import useUploadSnippet from "../add/hooks/useUploadSnippet";
import ErrorMessage from "@/components/custom/error-message";
import AddEditorBtn from "../add/components/add-editor";
import { FormButton } from "@/components/custom/form-button";
import { formBtn } from "@/app/styles/styles";

interface Props {
  setOpen: (values: boolean) => void;
  selectedSnippet: any;
  name: string;
}
const inputClass =
  "w-full rounded-md border border-primary bg-secondary p-2 focus:border-none";
function EditSnippetForm({ selectedSnippet }: Props) {
  const { description, title } = selectedSnippet;
  const {
    editor,
    handleLanguageSelect,
    handleHeadingChange,
    handleCodeChange,
    handleDelete,
    handleSubmit,
    handleAdd,
    message,
  } = useUploadSnippet({ selectedSnippet });
  return (
    <form action="" className="flex w-full     flex-col gap-2 py-4">
      <input
        name="title"
        type="text"
        placeholder="Title"
        defaultValue={title}
        required
        className={inputClass}
      />
      <textarea
        rows={3}
        cols={5}
        name="description"
        defaultValue={description}
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
      {/* <AddEditorBtn handleAdd={handleAdd} /> */}

      {message ? <ErrorMessage message={message} /> : null}
      <FormButton name="Post snippets" className={formBtn} />
    </form>
  );
}

export default EditSnippetForm;
