import { page } from "@/app/styles/styles";
import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";

interface Props {}

function TopBar(props: Props) {
  return (
    <div className={cn(page, "")}>
      <Link
        href="/snippets/add"
        className={cn("rounded-md bg-brand p-2 hover:bg-brand/50")}
      >
        Add snippets
      </Link>
    </div>
  );
}

export default TopBar;
