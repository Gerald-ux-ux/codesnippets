import React from "react";
import { SignInButton, useClerk, useUser } from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { capsFirstLetter } from "@/lib/utils";

export default function SignUp() {
  const { isSignedIn, user } = useUser();
  const { signOut } = useClerk();

  if (isSignedIn) {
    return (
      <div className="md:flex hidden    items-center">
        <DropdownMenu>
          <DropdownMenuTrigger className="border-none">
            <Image
              className="rounded-full"
              width={35}
              height={35}
              alt={user?.username || ""}
              src={user?.imageUrl}
            />
          </DropdownMenuTrigger>

          <DropdownMenuContent className="bg-secondary border mt-4 mr-24 border-primary ">
            <DropdownMenuLabel className="">
              <span className="text-base flex flex-col gap-2">
                {capsFirstLetter(`${user?.firstName} ${user?.lastName}`)}
                <span className="text-xs text-secondary">
                  {user?.primaryEmailAddress?.emailAddress}
                </span>
              </span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="border-b border-gradient" />
            <DropdownMenuItem className="hover:bg-primary hover:border border-primary hover:text-primary  text-secondary p-2 rounded-md">
              My snippets
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => signOut()}
              className="hover:bg-error  cursor-pointer text-error p-2 rounded-md"
            >
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
