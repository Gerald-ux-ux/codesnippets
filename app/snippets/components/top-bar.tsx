"use client";
import { page } from "@/app/styles/styles";
import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";
import { SignInButton, useClerk, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Hand } from "lucide-react";

interface Props {}

function TopBar(props: Props) {
  const { isSignedIn } = useUser();
  const router = useRouter();

  function handleClick() {
    router.push("/snippets/add");
  }

  if (!isSignedIn) {
    return (
      <SignInButton mode="modal">
        <button className="rounded-md  bg-brand p-2">Post a snippet</button>
      </SignInButton>
    );
  }
  return (
    <div className={cn(page, "")}>
      <button
        onClick={handleClick}
        className={cn("rounded-md bg-brand p-2 hover:bg-brand/50")}
      >
        Post a snippet
      </button>
    </div>
  );
}

export default TopBar;
