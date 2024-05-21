import { auth, clerkClient } from "@clerk/nextjs/server";
import React from "react";
import { getCodeSnippets, getSnippetByUserId } from "../actions/actions";
import SnippetList from "../components/snippet-list";
import { capsFirstLetter, cn } from "@/lib/utils";
import { page, primaryText, secondaryText } from "@/app/styles/styles";
import { Metadata } from "next";
import TopBar from "../components/top-bar";

export const metadata: Metadata = {
  title: "Profile - Code Snippets",
  description: "Quick view of your snippets",
};
export default async function ProfilePage() {
  const { userId } = auth();
  const user = await clerkClient.users.getUser(userId!);
  const userSnippets = await getSnippetByUserId(userId!);
  const snippets = getCodeSnippets();
  return (
    <div className={cn(page, "items-start md:px-0")}>
      <TopBar snippets={snippets} />
      <p className={cn(primaryText, 'text-secondary')}>
        Welcome back {capsFirstLetter(`${user?.firstName} ${user?.lastName}`)}
      </p>
      <SnippetList data={userSnippets} />
    </div>
  );
}
