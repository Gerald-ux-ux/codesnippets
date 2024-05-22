"use client";
import { Editor } from "@monaco-editor/react";
import clsx from "clsx";
import LanguageSelector from "./language-selector";
import { TrashIcon } from "lucide-react";
import Button from "@/components/custom/button";
import { languages } from "@/app/components/languages";

type Props = {
  editor: any;
  handleLanguageSelect: any;
  handleHeadingChange: any;
  handleCodeChange: any;
  handleDelete: any;
};
export default function CodeEditor({
  editor,
  handleLanguageSelect,
  handleHeadingChange,
  handleCodeChange,
  handleDelete,
}: Props) {

  return (
    <div className="flex  flex-col gap-6 overflow-x-auto  rounded-md ">
      {editor.map((value: any, i: number) => (
        <div key={i} className="my-2 border border-primary rounded-md">
          <input
            type="text"
            className={clsx(
              "w-full rounded-md rounded-b-none border-b border-primary bg-secondary px-5 py-3 focus:border-none"
            )}
            value={value.heading}
            required
            onChange={(e) => handleHeadingChange(i, e.target.value)}
            placeholder="Type a code heading"
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
          <div className="flex w-full items-center justify-between rounded-md rounded-t-none border-t border-gradient bg-secondary px-2 py-1 focus:border-none">
            <LanguageSelector
              onSelect={(language) => handleLanguageSelect(i, language)}
              values={languages}
              trigger={languages[0].label}
            />
            {i === 0 ? null : (
              <Button
                className="flex cursor-pointer"
                button={{
                  icon: <TrashIcon width={20} height={20} />,
                  action: (e) => handleDelete(i, e),
                }}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
