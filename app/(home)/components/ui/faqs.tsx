import Logo from "@/app/components/logo";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import React from "react";

interface Props {}

const faqs = [
  { q: "Is it open source?", a: "No its not" },
  { q: "Can i use it", a: "No  not" },
];

function Faqs(props: Props) {
  return (
    <div className="flex md:flex-row w-full  p-2 flex-col gap-4  justify-between items-start ">
      <div className="w-full flex flex-col gap-4">
        <span className="items-center w-full   flex gap-1">
          <Logo />
          <h1 className="text-brand font-bold text-2xl md:text-5xl">FAQS</h1>
        </span>
        <p className="text-xl font-normal ">
        Exploring some common questions

        </p>
      </div>

      <div className="w-full">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((question) => (
            <AccordionItem key={question.q} value={question.q}>
              <AccordionTrigger>{question.q}</AccordionTrigger>
              <AccordionContent>{question.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default Faqs;
