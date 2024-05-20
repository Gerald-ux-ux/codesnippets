"use client";
import { languages } from "@/app/components/languages";
import { secondaryButton } from "@/app/styles/styles";
import Button from "@/components/custom/button";
import CustomDropDown from "@/components/custom/custom-drop-down";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import LanguageSelector from "../add/components/language-selector";

interface Props {
  handleLanguageSelect: any;
  selectedLanguage: string;
  handleSortSelect: any;
  sortOptions: any;
}

function Filter({
  handleLanguageSelect,
  selectedLanguage,
  handleSortSelect,
  sortOptions,
}: Props) {
  return (
    <div className="flex   md:justify-end items-center gap-1 ">
      <LanguageSelector
        className="bg-secondary border border-primary rounded-md py-1"
        onSelect={(language) => handleLanguageSelect(language)}
        // language={languages[0]}
        values={languages}
        trigger={languages[0].label}
      />

      <LanguageSelector
        className="bg-secondary border border-primary rounded-md py-1"
        onSelect={(sortOption) => handleSortSelect(sortOption)}
        // language={thisName}
        values={sortOptions}
        trigger="Sort"
      />
    </div>
  );
}

export default Filter;
