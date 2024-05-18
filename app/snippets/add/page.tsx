import Link from "next/link";
import React from "react";
import { IoMdClose } from "react-icons/io";
import Form from "./components/add-snippet-form";

interface Props {}

function Add(props: Props) {
  return (
    <main className="mx-auto flex w-full max-w-[700px] animate-in flex-col gap-8 px-6">
      <div className="flex  w-full items-center justify-between">
        Add a code Snippet
        <Link href="/code-snippets">
          <IoMdClose />
        </Link>
      </div>
      <Form />
    </main>
  );
}

export default Add;
