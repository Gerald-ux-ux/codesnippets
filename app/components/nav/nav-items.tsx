import Button from "@/components/custom/button";
import { navBarItems } from "../../(home)/types/home";
import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  items: navBarItems;
  isSnippet?: boolean;
}

function NavItems({ items, isSnippet }: Props) {
  return (
    <Button
      button={{
        icon: items.icon,
        label: items.label,
        action: items.action,
        link: items.link,
      }}
      className={cn(
        isSnippet ? "bg-secondary border border-primary" : "",
        "text-base font-light flex items-center gap-2  hover:bg-hover hover:text-primary text-secondary px-4 py-2 rounded-md "
      )}
    />
  );
}

export default NavItems;
