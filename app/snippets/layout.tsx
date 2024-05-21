"use client";

import { cn } from "@/lib/utils";
import { page } from "../styles/styles";
import NavBar from "../components/nav/nav-bar";
import { navBarItems } from "../(home)/types/home";
import { CommentAdd02Icon, DiscordIcon } from "@/lib/icons/icons";
import useSubmitFeedback from "./components/chat/hooks/useSubmitFeedback";
import Feedback from "./components/chat/components/feedback";

export default function SnippetRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const snippetItems: navBarItems[] = [
    {
      label: "Join the community",
      link: "https://discord.gg/tqm4eKy2",
      icon: <DiscordIcon />,
    },
    {
      label: "Feedback",
      icon: <CommentAdd02Icon />,
      action: () => {
        setOpen(true);
      },
    },
  ];
  const { setOpen, open } = useSubmitFeedback();

  console.log("opened", open);
  return (
    <div className={cn("flex flex-col ", page)}>
      <NavBar navItems={snippetItems} isSnippet={true} />
      {children}


      <Feedback open={open} setOpen={setOpen} />
    </div>
  );
}
