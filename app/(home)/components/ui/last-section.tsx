"use client";
import { primaryText } from "@/app/styles/styles";
import Btn from "@/components/custom/btn";
import { firaMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React from "react";

interface Props {}

function LastSection(props: Props) {
  return (
    <div className="  w-full flex flex-col gap-8 p-4 items-center justify-center">
      <p className={cn(primaryText, "text-center")}>
        Add your{" "}
        <span className={cn(firaMono.className, "text-brand")}>
          most used snippets.
        </span>{" "}
        <br /> Get started today.
      </p>
      <Btn action={() => {}} name="Post a snippet" />
    </div>
  );
}

export default LastSection;
