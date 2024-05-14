
'use client'
import Btn from "@/components/custom/btn";
import React from "react";

interface Props {}

function LastSection(props: Props) {
  return (
    <div className="">
      <p>
        Add your most used snippets. <br /> Get started today.
      </p>
      <Btn action={() => {}} name="Add snippet" />
    </div>
  );
}

export default LastSection;
