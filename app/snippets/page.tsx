import React from "react";
import { cn } from "@/lib/utils";
import TopBar from "./components/top-bar";
import { getCodeSnippets } from "./actions/actions";
import SnippetList from "./components/snippet-list";
import { page } from "../styles/styles";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore - Code Snippets",
  description: "Search, Copy and paste your snippet of choice",
};

export default async function Snippets() {
  const snippets = await getCodeSnippets();



  return (
    <div className={cn(page, "w-full  px-0")}>
      <TopBar snippets={snippets} />
      <SnippetList data={snippets} />
    </div>
  );
}
