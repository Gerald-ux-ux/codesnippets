"use client";
import { primaryButton, primaryText } from "@/app/styles/styles";
import Button from "@/components/custom/button";
import { firaMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { SignInButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {}

function LastSection(props: Props) {
  const { isSignedIn } = useUser();
  const router = useRouter();

  function handleClick() {
    router.push("/snippets/add");
  }
  return (
    <div className="  w-full flex flex-col gap-8 p-4 items-center justify-center">
      <p className={cn(primaryText, "text-center")}>
        Add your{" "}
        <span className={cn(firaMono.className, "text-brand")}>
          most used snippets.
        </span>{" "}
        <br /> Get started today.
      </p>
      {isSignedIn ? (
        <Button
          className={cn("md:flex hidden", primaryButton)}
          button={{
            label: "Add your snippets",
            action: handleClick,
          }}
        />
      ) : (
        <SignInButton mode="modal">
          <button className={cn("md:flex hidden", primaryButton)}>
            Post a snippet
          </button>
        </SignInButton>
      )}{" "}
    </div>
  );
}

export default LastSection;
