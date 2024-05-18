"use client";
import { Editor } from "@monaco-editor/react";
import clsx from "clsx";
import LanguageSelector from "./language-selector";
import { TrashIcon } from "lucide-react";

type Props = {
  editor: any;
  handleLanguageSelect: any;
  handleHeadingChange: any;
  handleCodeChange: any;
  // theme: any;
  handleDelete: any;
};
export default function CodeEditor({
  editor,
  handleLanguageSelect,
  handleHeadingChange,
  handleCodeChange,
  // theme,
  handleDelete,
}: Props) {
  return (
    <div className="flex max-h-[800px]  flex-col gap-6 overflow-x-auto  p-2 ">
      {editor.map((value: any, i: number) => (
        <div key={i} className="my-2">
          <input
            type="text"
            className={clsx(
              "w-full rounded-md rounded-b-none border-b border-primary bg-secondary p-2 focus:border-none"
            )}
            value={value.heading}
            required
            onChange={(e) => handleHeadingChange(i, e.target.value)}
            placeholder="Code heading"
          />
          <Editor
            onChange={(newValue) =>
              newValue !== undefined && handleCodeChange(i, newValue)
            }
            value={value.code}
            className="bg-secondary p-2"
            height="25vh"
            key={value.lang.value}
            theme={"vs-dark"}
            defaultLanguage={value.lang.value}
            options={{
              minimap: {
                enabled: false,
              },
            }}
            defaultValue="/** Hello world! */"
          />
          <div className="flex w-full items-center justify-between rounded-md rounded-t-none border-t border-primary bg-secondary px-2 py-1 focus:border-none">
            <LanguageSelector
              onSelect={(language) => handleLanguageSelect(i, language)}
              language={value.lang}
            />
            {i === 0 ? null : (
              <button onClick={(e) => handleDelete(i, e)} className="flex  ">
                <TrashIcon width={20} height={20} />
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
