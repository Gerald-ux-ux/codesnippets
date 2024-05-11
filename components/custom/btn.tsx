import React from "react";
import { Button } from "../shadcn/ui/button";
import { cn } from "@/lib/utils";

interface Props {
  name: string;
  action: () => void;
  hidden?: boolean;
  outline?: boolean;
}

function Btn({ name, action, hidden, outline }: Props) {
  return (
    <div className="  flex justify-end">
      <Button
        variant={outline ? "outline" : "default"}
        onClick={action}
        className={cn(
          "bg-brand hover:bg-brand/50  rounded-md px-6 py-2",
          hidden && "md:flex hidden",
          outline
            ? "border bg-primary border-primary w-full bg-transparent hover:text-secondary hover:bg-transparent"
            : ""
        )}
      >
        {name}
      </Button>
    </div>
  );
}

export default Btn;
