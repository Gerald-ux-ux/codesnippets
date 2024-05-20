"use client";
import React from "react";
import { SignInButton, useClerk, useUser } from "@clerk/nextjs";
import Image from "next/image";
import { capsFirstLetter } from "@/lib/utils";
import CustomDropDown from "@/components/custom/custom-drop-down";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const { isSignedIn, user } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();

  if (isSignedIn) {
    return (
      <div className="md:flex hidden    items-center">
        <CustomDropDown
          trigger={
            <Image
              className="rounded-full"
              width={35}
              height={35}
              alt={user?.username || ""}
              src={user?.imageUrl}
            />
          }
          label={
            <span className="text-base flex flex-col gap-2">
              {capsFirstLetter(`${user?.firstName} ${user?.lastName}`)}
              <span className="text-xs text-secondary">
                {user?.primaryEmailAddress?.emailAddress}
              </span>
            </span>
          }
          items={[
            {
              label: "All snippets",
              onClick: () => router.push("/snippets"),
            },
            {
              label: "My snippets",
              onClick: () => router.push("/snippets/profile"),
            },
            {
              label: "Sign Out",
              onClick: () => signOut(),
              isImportant: true,
            },
          ]}
        />
      </div>
    );
  }
  return (
    <div className="">
      <SignInButton mode="modal">
        <button className="rounded-md  bg-brand p-2">Log in</button>
      </SignInButton>
    </div>
  );
}
