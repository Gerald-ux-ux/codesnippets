import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";
import { navBarItems } from "../types/home";

interface Props {
  items: navBarItems;
}

function NavItems({ items }: Props) {
  return (
    <Link
      href={items.link}
      className={cn(
        "text-primary  hover:bg-hover hover:text-secondary p-2 rounded-lg "
      )}
    >
      {items.label}
    </Link>
  );
}

export default NavItems;
