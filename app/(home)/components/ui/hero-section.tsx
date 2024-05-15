"use client";
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
    <div className="flex items-center justify-center w-full rounded-2xl">
      <TextRevealCard
        className="w-full flex items-center gap-6 justify-center flex-col bg-primary "
        text="Boost your productivity"
        revealText="With Code snippets "
      >
        <TextRevealCardTitle className="text-primary mb-4">
          <Btn action={() => {}} name="Get Started" />
        </TextRevealCardTitle>
        <TextRevealCardDescription className="text-secondary text-center">
          Discover, share and manage code snippets across different languages
          and frameworks. <br /> Streamline your development workflow and just
          snippit
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}

export default HeroSection;
