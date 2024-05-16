import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";
import { navBarItems } from "../../(home)/types/home";

interface Props {
  items: navBarItems;
}

function NavItems({ items }: Props) {
  return (
    <Link
      href={items.link}
      className={cn(
        "text-base font-light  hover:bg-hover hover:text-primary text-secondary p-2 rounded-md "
      )}
    >
      {items.label}
    </Link>
  );
}

export default NavItems;
