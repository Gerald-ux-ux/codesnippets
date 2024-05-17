import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";
import { navBarItems } from "../../(home)/types/home";

interface Props {
  items: navBarItems;
  isSnippet?: boolean;
}

function NavItems({ items, isSnippet }: Props) {
  return (
    <Link
      href={items.link}
      className={cn(
        isSnippet ? "bg-secondary border border-primary" : "",
        "text-base font-light flex items-center gap-2  hover:bg-hover hover:text-primary text-secondary p-2 rounded-md "
      )}
    >
      {items.label} {items.icon}
    </Link>
  );
}

export default NavItems;
