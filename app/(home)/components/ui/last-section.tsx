"use client";
import Btn from "@/components/custom/btn";
import { firaMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React from "react";

interface Props {}

function LastSection(props: Props) {
  return (
    <div className="  w-full flex flex-col gap-8 p-4 items-center justify-center">
      <p className="text-center md:text-4xl text-base">
        Add your{" "}
        <strong className={cn(firaMono.className, "text-brand")}>
          most used snippets.
        </strong>{" "}
        <br /> Get started today.
      </p>
      <Btn action={() => {}} name="Add snippet" />
    </div>
  );
}

export default LastSection;
