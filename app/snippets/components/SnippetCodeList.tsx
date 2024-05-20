"use client";
import { IoClipboardOutline } from "react-icons/io5";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { capsFirstLetter } from "@/lib/utils";
import toast from "react-hot-toast";
import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { copySnippet } from "../actions/actions";
import Actions from "./actions-component";

type SnippetCodeListProps = {
  code: any;
  user?: any;
  author?: string;
};

export default function SnippetCodeList({
  code,
  user,
  author,
}: SnippetCodeListProps) {
  const [success, setSuccess] = useState(false);
  const copyCode = async (snippetCode: string, snippetId: string) => {
    const res = await copySnippet(snippetId);

    if (res.success) {
      setSuccess(true);
      navigator.clipboard.writeText(snippetCode);
      setTimeout(() => setSuccess(false), 2000);
    } else {
      toast.error(res.message);
    }
  };

  return (
    <Accordion type="single" className="mt-0 " collapsible>
      <AccordionItem value="item-1" className="mt-0">
        <AccordionTrigger className=" flex  w-full items-center  justify-between ">
          {code.heading}
        </AccordionTrigger>
        <AccordionContent className="">
          <div className="rounded-lg  p-2">
            <div className="mr-4 flex w-full  cursor-pointer  items-center justify-between   rounded-lg p-2 text-secondary ">
              {capsFirstLetter(code.language)}
              <span className="flex items-center  gap-4">
                <button
                  onClick={() => copyCode(code.content, code._id)}
                  className="flex items-center gap-2"
                >
                  {success ? (
                    <>
                      <IoMdCheckmark />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <IoClipboardOutline />
                      <span>Copy code</span>
                    </>
                  )}
                </button>
                {user === author && (
                  <Actions
                    actionLabel="snippet"
                    modalActionTitle="Delete this snippet"
                    code={code}
                  />
                )}
              </span>
            </div>
            <SyntaxHighlighter
              style={a11yDark}
              wrapLongLines={true}
              customStyle={{
                padding: "12px",
                backgroundColor: "#2a2a2a",
              }}
              showLineNumbers
              language={code.language.toLowerCase()}
            >
              {code.content}
            </SyntaxHighlighter>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
