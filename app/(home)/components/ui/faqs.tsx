import Logo from "@/app/components/logo";
import { primaryText, secondaryText } from "@/app/styles/styles";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { firaMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React from "react";

interface Props {}

const faqs = [
  {
    q: "Is it open source?",
    a: "Yes it is, just make sure to read the CONTRIBUTION.MD file before starting",
  },
  {
    q: "How can i be a part of this?",
    a: "Join the discord community and get to meet your fellow developers",
  },
  {
    q: "What is the tech stack used?",
    a: "Next.Js",
  },
];

function Faqs(props: Props) {
  return (
    <div className="flex md:flex-row w-full  p-2 flex-col gap-4  justify-between items-start ">
      <div className="w-full flex flex-col gap-4">
        <span className="items-center w-full   flex gap-1">
          <Logo />
          <h1
            className={cn(
              primaryText,
              "text-brand font-bold ",
              firaMono.className
            )}
          >
            FAQS
          </h1>
        </span>
        <p className={cn(secondaryText, " font-normal ")}>
          Exploring some common questions
        </p>
      </div>

      <div className="w-full">
        <Accordion
          type="single"
          collapsible
          className={cn(secondaryText, "w-full")}
        >
          {faqs.map((question) => (
            <AccordionItem key={question.q} value={question.q}>
              <AccordionTrigger>{question.q}</AccordionTrigger>
              <AccordionContent className={cn("text-sm")}>
                {question.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default Faqs;
