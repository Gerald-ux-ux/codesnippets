"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

interface Props {}

function AddSnippet(props: Props) {
  return (
    <div>
      <Link
        href="/snippets/add"
        className={cn("rounded-md bg-brand p-2 hover:bg-brand/50")}
      >
        Add snippets
      </Link>
    </div>
  );
}

export default AddSnippet;
