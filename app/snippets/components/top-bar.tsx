"use client";
import { page, primaryButton } from "@/app/styles/styles";
import { cn } from "@/lib/utils";
import React from "react";
import { SignInButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Button from "@/components/custom/button";

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
      <Button
        className={primaryButton}
        button={{
          label: "Post a snippet",
          action: handleClick,
        }}
      />
    </div>
  );
}

export default TopBar;
