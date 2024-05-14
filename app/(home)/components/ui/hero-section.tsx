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
        className="w-full flex items-center justify-center flex-col bg-primary "
        text="You know the business"
        revealText="I know the chemistry "
      >
        <TextRevealCardTitle className="text-primary">
          Sometimes, you just need to see it.
        </TextRevealCardTitle>
        <TextRevealCardDescription className="text-secondary" >
          This is a text reveal card. Hover over the card to reveal the hidden
          text.
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
  //   <div className="border border-primary flex items-center justify-center flex-col rounded-lg p-4 w-full">
  //     <div className=" my-24 items-center  flex flex-col gap-12 w-full">
  //       <TextRevealCard
  //         className='bg-none '
  //         text="Code Snippets"
  //         revealText="Boost Your Productivity "
  //       >

  //       </TextRevealCard>
  //       <h1 className={cn(firaMono.className, "text-4xl text-center")}></h1>

  //       <p className=" text-secondary text-center">
  //         Discover, share and manage code snippets across <br /> different
  //         languages and frameworks. <br /> Streamline your development workflow
  //         and just snippit
  //       </p>

  //       <Btn action={() => {}} name="Get Started" />
  //     </div>
  //   </div>
  // );
}

export default HeroSection;
