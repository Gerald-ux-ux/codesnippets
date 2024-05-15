import { cn } from "@/lib/utils";
import React from "react";
import { section } from "../../styles/style";
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
      <span className="w-full text-center">
        With <strong className="text-brand">all languages</strong> supported{" "}
        <br />
        <p className="text-secondary">Select which ever tech stack you use </p>
      </span>
      <InfiniteMovingCards items={languages} direction="right" speed="normal" />
    </div>
  );
}

export default LanguageCarousel;
