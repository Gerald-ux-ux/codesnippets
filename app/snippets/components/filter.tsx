"use client";
import { languages } from "@/app/components/languages";
import React from "react";
import LanguageSelector from "../add/components/language-selector";
import { useFiltersStore } from "@/lib/store";

interface Props {
  sortOptions: any;
}

function Filter({ sortOptions }: Props) {
  const { setFilter }: any = useFiltersStore();
  const handleLanguageSelect = (language: { label: string; value: string }) => {
    setFilter({ selectedLanguage: language.value });
  };

  const handleSortSelect = (sortOption: { label: string; value: string }) => {
    setFilter({ selectedSort: sortOption.value });
  };
  return (
    <div className="flex   md:justify-end items-center gap-1 ">
      <LanguageSelector
        className="bg-secondary border border-primary rounded-md py-1"
        onSelect={handleLanguageSelect}
        values={languages}
        trigger={languages[0].label}
      />

      <LanguageSelector
        className="bg-secondary border border-primary rounded-md py-1"
        onSelect={handleSortSelect}
        values={sortOptions}
        trigger="Sort"
      />
    </div>
  );
}

export default Filter;
