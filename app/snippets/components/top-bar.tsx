"use client";
import { page, primaryButton } from "@/app/styles/styles";
import { cn } from "@/lib/utils";
import React from "react";
import { SignInButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Button from "@/components/custom/button";
import Search from "./search";
import Filter from "./filter";

interface Props {}

function TopBar({}: Props) {
  const { isSignedIn } = useUser();
  const router = useRouter();

  function handleClick() {
    router.push("/snippets/add");
  }

  const sortOptions = [{ label: "Most recent", value: "most recent" }];

  return (
    <div
      className={cn(
        page,
        "flex px-0 w-full   mt-4 mb-12  md:mt-0 justify-between  md:flex-row items-center gap-2"
      )}
    >
      <div className="flex md:w-10/12 w-full md:flex-row flex-col  gap-2 ">
        <Search />
        <Filter sortOptions={sortOptions} />
      </div>

      <div className="md:flex hidden">
        {isSignedIn ? (
          <Button
            className={cn("md:flex hidden", primaryButton)}
            button={{
              label: "Post a snippet",
              action: handleClick,
            }}
          />
        ) : (
          <SignInButton mode="modal">
            <button className={cn("md:flex hidden", primaryButton)}>
              Post a snippet
            </button>
          </SignInButton>
        )}
      </div>
    </div>
  );
}

export default TopBar;
