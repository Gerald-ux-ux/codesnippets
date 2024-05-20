import { useState } from "react";

export default function useFilter() {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedSort, setSelectedSort] = useState("");

  const handleLanguageSelect = (language: { label: string; value: string }) => {
    setSelectedLanguage(language.value);
  };

  const handleSortSelect = (sortOption: { label: string; value: string }) => {
    setSelectedSort(sortOption.value);
  };
  const sortOptions = [{ label: "Most recent", value: "most recent" }];
  return {
    selectedLanguage,
    selectedSort,
    handleLanguageSelect,
    handleSortSelect,
    sortOptions,
  };
}
