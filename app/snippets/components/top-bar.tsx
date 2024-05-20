"use client";
import { page, primaryButton } from "@/app/styles/styles";
import { cn } from "@/lib/utils";
import React from "react";
import { SignInButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Button from "@/components/custom/button";
import Search from "./search";
import Filter from "./filter";
import useFilter from "../hooks/useFilter";

interface Props {
  snippets: any;
}

function TopBar({ snippets }: Props) {
  const { isSignedIn } = useUser();
  const router = useRouter();
  const {
    selectedLanguage,
    selectedSort,
    handleLanguageSelect,
    handleSortSelect,
    sortOptions,
  } = useFilter();
  function handleClick() {
    router.push("/snippets/add");
  }

  console.log("snippets", snippets);

  if (!isSignedIn) {
    return (
      <SignInButton mode="modal">
        <button className="rounded-md  bg-brand p-2">Post a snippet</button>
      </SignInButton>
    );
  }
  return (
    <div
      className={cn(
        page,
        "flex px-0 w-full   mt-4 md:mt-0 justify-between  md:flex-row items-center gap-2"
      )}
    >
      <div className="flex md:w-10/12 w-full md:flex-row flex-col  gap-2 ">
        <Search />
        <Filter
          handleLanguageSelect={handleLanguageSelect}
          handleSortSelect={handleSortSelect}
          selectedLanguage={selectedLanguage}
          sortOptions={sortOptions}
        />
      </div>

      <div className="md:flex hidden">
        <Button
          className={cn("md:flex hidden", primaryButton)}
          button={{
            label: "Post a snippet",
            action: handleClick,
          }}
        />
      </div>
    </div>
  );
}

export default TopBar;
