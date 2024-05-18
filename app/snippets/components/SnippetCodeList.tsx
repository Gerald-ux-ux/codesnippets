"use client";
import { IoClipboardOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import dark from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "next-themes";
import { capsFirstLetter } from "@/lib/utils";
import { copySnippet } from "../actions/action";
import toast from "react-hot-toast";
import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
// import DeleteSnippet from "./actions/delete-snippet";
import { UserInfo } from "@/app/types/typings";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type SnippetCodeListProps = {
  code: any;
  user?: UserInfo;
  author?: string;
};

export default function SnippetCodeList({
  code,
  user,
  author,
}: SnippetCodeListProps) {
  const theme = useTheme();

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
  const customStyleLight = {
    ...a11yDark,
    "hljs-comment": { color: "#6a737d" }, // Ensure this is a soft but readable gray
    "hljs-keyword": { color: "#0550ae" }, // A strong blue for keywords
    "hljs-string": { color: "#0a3069" }, // A darker blue for strings, might need adjustment
    hljs: { backgroundColor: "#f5f5f5", color: "#333333" }, // General text color
    "hljs-function .hljs-keyword": { color: "#007700" }, // Function names in a different color
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
              <span className="flex items-center gap-4">
                <button
                  onClick={() => copyCode(code.content, code._id)}
                  className="flex  items-center gap-2"
                >
                  {success ? (
                    <>
                      <IoMdCheckmark />
                      <small>Copied</small>
                    </>
                  ) : (
                    <>
                      <IoClipboardOutline />
                      <small>Copy code</small>
                    </>
                  )}
                </button>

                {/* {user?._id === author && (
                  <DeleteSnippet
                    text="Delete this specific code"
                    code_id={code}
                    snippet="Code"
                  />
                )} */}
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
