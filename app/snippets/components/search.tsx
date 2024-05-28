"use client";

import { Search02Icon } from "@/lib/icons/icons";
import React, { useEffect } from "react";
import useSearch from "../hooks/useSearch";
import { useParams, useSearchParams } from "next/navigation";

interface Props {}

function Search({}: Props) {
  const { searchQuery, handleSearch } = useSearch();

  return (
    <form
      onSubmit={(e: any) => {
        e.preventDefault();
      }}
      className="w-full flex items-center gap-2  bg-secondary rounded-lg px-4 py-3 border border-primary"
    >
      <Search02Icon />
      <input
        type="text"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        value={searchQuery}
        className="w-full bg-inherit focus:outline-none "
        placeholder="Search for a snippet..."
      />
    </form>
  );
}

export default Search;
