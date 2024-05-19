import React from "react";
import { cn } from "@/lib/utils";
import TopBar from "./components/top-bar";
import { getCodeSnippets } from "./actions/actions";
import SnippetList from "./components/snippet-list";
import { page } from "../styles/styles";

export default async function Snippets() {
  const snippets = await getCodeSnippets();

  return (
    <div className={cn(page)}>
      <TopBar />
      <SnippetList data={snippets} />
    </div>
  );
}
