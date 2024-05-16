"use client";
import { bodyText, primaryText, secondaryText } from "@/app/styles/styles";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/aceternity/text-reveal-card";
import Btn from "@/components/custom/btn";
import { firaMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React from "react";

interface Props {}

function HeroSection(props: Props) {
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
          <Btn action={() => {}} name="Get Started" />
        </TextRevealCardTitle>
      </TextRevealCard>
    </div>
  );
}

export default HeroSection;
