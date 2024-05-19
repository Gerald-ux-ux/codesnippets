import Link from "next/link";
import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import Form from "./components/add-snippet-form";
import { cn } from "@/lib/utils";
import { page } from "@/app/styles/styles";
import { Metadata } from "next";

interface Props {}

export const metadata: Metadata = {
  title: "Add a snippet - Make it available for the whole community",
  description: "Add your snippet of choice.",
};

function Add(props: Props) {
  return (
    <div className={cn(page)}>
      <div className="flex w-full md:text-base text-sm  items-center justify-between">
        Add a snippet of your choice
        <Link
          className={cn(
            "bg-secondary border md:text-base border-primary  p-2 flex gap-2 items-center rounded-md  hover:bg-hover"
          )}
          href="/snippets"
        >
          <IoIosArrowRoundBack className="  md:text-2xl" />
          Go back
        </Link>
      </div>
      <Form />
    </div>
  );
}

export default Add;
