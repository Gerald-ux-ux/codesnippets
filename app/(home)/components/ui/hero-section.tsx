"use client";
import Btn from "@/components/custom/btn";
import { firaMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React from "react";

interface Props {}

function HeroSection(props: Props) {
  return (
    <div className="border border-primary flex items-center justify-center flex-col rounded-lg p-4 w-full">
      <div className=" my-24 items-center  flex flex-col gap-12 w-full">
        <h1 className={cn(firaMono.className, "text-4xl text-center")}>
          Boost Your Productivity with CodeSnippets
        </h1>

        <p className=" text-secondary text-center">
          Discover, share and manage code snippets across <br /> different
          languages and frameworks. <br /> Streamline your development workflow
          and just snippit
        </p>

        <Btn action={() => {}} name="Get Started" />
      </div>
    </div>
  );
}

export default HeroSection;
