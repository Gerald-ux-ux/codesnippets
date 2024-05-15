import { cn } from "@/lib/utils";
import React from "react";
import { section } from "../../styles/style";
import { InfiniteMovingCards } from "@/components/aceternity/infinite-moving-cards";

interface Props {}

const languages = [
  { label: "JavaScript", value: "javascript" },
  { label: "Python", value: "python" },
  { label: "HTML", value: "html" },
  { label: "CSS", value: "css" },
  { label: "SASS", value: "sass" },
  { label: "Markdown", value: "markdown" },
  { label: "TypeScript", value: "typescript" },
  { label: "Node.js", value: "nodejs" },
  { label: "Json", value: "json" },
  { label: "PHP", value: "php" },
  { label: "Go", value: "go" },
  { label: "Java", value: "java" },
  { label: "Kotlin", value: "kotlin" },
  { label: "Rust", value: "rust" },
  { label: "Swift", value: "swift" },
  { label: "C", value: "c" },
];
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
