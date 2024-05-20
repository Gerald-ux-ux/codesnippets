import { auth, clerkClient } from "@clerk/nextjs/server";
import React from "react";
import { getSnippetByUserId } from "../actions/actions";
import SnippetList from "../components/snippet-list";
import { capsFirstLetter, cn } from "@/lib/utils";
import { page, secondaryText } from "@/app/styles/styles";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile - Code Snippets",
  description: "Quick view of your snippets",
};
export default async function ProfilePage() {
  const { userId } = auth();
  const user = await clerkClient.users.getUser(userId!);
  const userSnippets = await getSnippetByUserId(userId!);
  return (
    <div className={cn(page, "items-start")}>
      <p className={cn(secondaryText)}>
        Welcome back {capsFirstLetter(`${user?.firstName} ${user?.lastName}`)}
      </p>
      <SnippetList data={userSnippets} />
    </div>
  );
}
