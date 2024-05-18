import React from "react";
import NavBar from "../components/nav/nav-bar";
import { snippetItems } from "../components/nav/menus";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import AddSnippet from "./add/components/add-snippet";

export const metadata: Metadata = {
  title: "Code Snippets - Boost your productivity",
  description: "Search, copy and paste snippets directly to your project",
};

export default function Snippets() {
  return (
    <div className="flex flex-col gap-14 w-full animate-in  items-center  px-4 mx-auto max-w-7xl">
      <NavBar navItems={snippetItems} isSnippet={true} />

      <AddSnippet />
    </div>
  );
}
