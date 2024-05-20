"use client";

import React from "react";
import CodeEditor from "../add/components/code-editor";
import useUploadSnippet from "../add/hooks/useUploadSnippet";
import ErrorMessage from "@/components/custom/error-message";
import { FormButton } from "@/components/custom/form-button";
import { formBtn, primaryButton, tertiaryButton } from "@/app/styles/styles";
import Button from "@/components/custom/button";
import { cn } from "@/lib/utils";

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
    <form action="" className="flex w-full   flex-col gap-2 py-4">
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
      {message ? <ErrorMessage message={message} /> : null}
      <div className="flex w-full items-center justify-end  gap-4">
        <Button
          className={tertiaryButton}
          button={{
            label: "No close",
            // action: () => setOpen(false),
          }}
        />
        <Button
          isFormButton={true}
          className={cn(primaryButton, "hover:text-error rounded-md")}
          button={{
            label: "Post snippet",
          }}
        />
      </div>
    </form>
  );
}

export default EditSnippetForm;
