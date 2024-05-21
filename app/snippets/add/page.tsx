import Link from "next/link";
import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import Form from "./components/add-snippet-form";
import { cn } from "@/lib/utils";
import { page, primaryText, secondaryText } from "@/app/styles/styles";
import { Metadata } from "next";
import BackBtn from "@/components/custom/back-btn";

interface Props {}

export const metadata: Metadata = {
  title: "Add - Code Snippets",
  description: "Add your snippet of choice.",
};

function Add(props: Props) {
  return (
    <div className={cn(page, 'mt-12')}>
      <div
        className={cn("flex w-full md:text-base text-sm  items-center gap-4")}
      >
        <BackBtn />
        <p className={cn(secondaryText)}>Add a snippet of your choice</p>
      </div>
      <Form />
    </div>
  );
}

export default Add;
