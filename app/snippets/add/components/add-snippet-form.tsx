"use client";
import CodeEditor from "./code-editor";
import ErrorMessage from "@/components/custom/error-message";
import useUploadSnippet from "../hooks/useUploadSnippet";
import { primaryButton, secondaryButton } from "@/app/styles/styles";
import { cn } from "@/lib/utils";
import Button from "@/components/custom/button";
import { PlusIcon } from "lucide-react";

const inputClass =
  "w-full rounded-md  border border-primary bg-secondary py-3 px-5 focus:border-none";

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
        className={cn(inputClass)}
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

      <div className="flex items-center justify-between w-full">
        <Button
          className={secondaryButton}
          button={{
            icon: <PlusIcon width={20} height={20} />,
            label: "Add another snippet",
            iconClass: "text-primary",
            labelClass: "text-primary",
            action: handleAdd,
          }}
        />
        {/* Make the label dynamic */}
        <Button
          isFormButton={true}
          className={primaryButton}
          button={{
            label: "Post snippet",
          }}
        />
      </div>
      {message ? <ErrorMessage message={message} /> : null}
    </form>
  );
}
