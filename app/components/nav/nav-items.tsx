import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";
import { navBarItems } from "../../(home)/types/home";
import { secondaryButton, tertiaryButton } from "@/app/styles/styles";

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
        secondaryButton, 'text-secondary px-4 py-2'
      )}
    >
      {items.label} {items.icon}
    </Link>
  );
}

export default NavItems;
