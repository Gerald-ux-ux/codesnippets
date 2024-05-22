"use client";
import { primaryButton, primaryText, secondaryText } from "@/app/styles/styles";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/aceternity/text-reveal-card";
import Button from "@/components/custom/button";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {}

function HeroSection(props: Props) {
  const router = useRouter();

  function handleClick() {
    router.push("/snippets");
  }
  return (
    <div className="flex items-center  justify-center w-full rounded-2xl">
      <TextRevealCard
        className={cn(
          primaryText,
          "w-full flex items-center gap-6 justify-center flex-col bg-primary "
        )}
        text="Boost your productivity"
        revealText="With Code snippets "
      >
        <TextRevealCardDescription
          className={cn(secondaryText, "text-secondary text-center")}
        >
          Discover, share and manage code snippets across different languages
          and frameworks
        </TextRevealCardDescription>
        <TextRevealCardTitle className="mt-4 ">
          <Button
            className={cn("md:flex hidden", primaryButton)}
            button={{
              label: "View snippets",
              action: handleClick,
            }}
          />
        </TextRevealCardTitle>
      </TextRevealCard>
    </div>
  );
}

export default HeroSection;
