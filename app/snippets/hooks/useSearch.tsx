"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function useSearch() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [resultClicked, setResultClicked] = useState<boolean>(false);

  const searchParams = useSearchParams();
  const pathname = usePathname();

  const { replace } = useRouter();

  function handleSearch(query: string) {
    setSearchQuery(query);

    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set("query", query.toLocaleLowerCase());
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  const handleResultsClick = (result: any) => {
    setSearchQuery(result);
    const params = new URLSearchParams(searchParams);
    params.set("query", result.toLowerCase());
    replace(`${pathname}?${params.toString()}`);
    setResultClicked(true);
  };
  return {
    handleResultsClick,
    searchQuery,
    setSearchResults,
    resultClicked,
    searchResults,
    handleSearch,
  };
}
