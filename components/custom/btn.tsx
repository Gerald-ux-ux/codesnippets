import React from "react";
import { Button } from "../shadcn/ui/button";
import { cn } from "@/lib/utils";

interface Props {
  name: string;
  action: () => void;
}

function Btn({ name, action }: Props) {
  return (
    <div className="w-full  flex justify-end">
      <Button
        onClick={action}
        className={cn("bg-brand hover:bg-brand/50  rounded-md px-6 py-2")}
      >
        {name}
      </Button>
    </div>
  );
}

export default Btn;
