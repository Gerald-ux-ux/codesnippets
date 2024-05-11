import React from "react";
import { Button } from "../shadcn/ui/button";
import { cn } from "@/lib/utils";

interface Props {
  name: string;
  action: () => void;
  hidden?: boolean;
}

function Btn({ name, action, hidden }: Props) {
  return (
    <div className="  flex justify-end">
      <Button
        onClick={action}
        className={cn(
          "bg-brand hover:bg-brand/50  rounded-md px-6 py-2",
          !hidden && "md:flex hidden"
        )}
      >
        {name}
      </Button>
    </div>
  );
}

export default Btn;
