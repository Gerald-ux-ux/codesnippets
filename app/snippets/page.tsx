import React from "react";
import NavBar from "../components/nav/nav-bar";
import { snippetItems } from "../components/nav/menus";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import TopBar from "./components/top-bar";
import { getCodeSnippets } from "./actions/actions";
import SnippetList from "./components/snippet-list";

export const metadata: Metadata = {
  title: "Code Snippets - Boost your productivity",
  description: "Search, copy and paste snippets directly to your project",
};

export default async function Snippets() {
  const snippets = await getCodeSnippets();

  // console.log('snippets', snippets)
  return (
    <div className="flex flex-col gap-6 w-full animate-in  items-center  px-4 mx-auto max-w-7xl">
      <NavBar navItems={snippetItems} isSnippet={true} />
      <TopBar />
      <SnippetList data={snippets} />
    </div>
  );
}
