"use client";
import React from "react";
import NavBar from "../components/nav/nav-bar";
import { snippetItems } from "../components/nav/menus";

export default function Snippets() {
  return (
    <div className="flex flex-col gap-14 w-full animate-in  items-center  px-4 mx-auto max-w-7xl">
      <NavBar navItems={snippetItems} isSnippet={true} />
    </div>
  );
}
