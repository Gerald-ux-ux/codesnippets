import { cn } from "@/lib/utils";
import React from "react";
import { InfiniteMovingCards } from "@/components/aceternity/infinite-moving-cards";
import { languages } from "@/app/components/languages";

interface Props {}

function LanguageCarousel(props: Props) {
  return (
    <div
      className={cn(
        "w-full flex items-center gap-6 p-4 justify-center flex-col"
      )}
    >
      <span className="w-full md:text-2xl text-base text-center">
        With <strong className="text-brand">all languages</strong> supported{" "}
        <br />
        <p className="text-secondary">Select which ever tech stack you use </p>
      </span>
      <InfiniteMovingCards items={languages} direction="right" speed="normal" />
    </div>
  );
}

export default LanguageCarousel;
