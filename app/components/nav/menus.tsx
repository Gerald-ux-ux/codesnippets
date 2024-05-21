import { navBarItems } from "@/app/(home)/types/home";
import { CommentAdd02Icon, DiscordIcon } from "../../../lib/icons/icons";

export const navItems: navBarItems[] = [
  {
    label: "App",
    link: "/snippets",
  },
  {
    label: "Community",
    link: "https://discord.gg/tqm4eKy2",
  },
  {
    label: "Github",
    link: "https://github.com/Gerald-ux-ux/codesnippets",
  },
];


export const snippetItems: navBarItems[] = [
  {
    label: "Join the community",
    link: "https://discord.gg/tqm4eKy2",
    icon: <DiscordIcon />,
  },
  {
    label: "Feedback",
    icon: <CommentAdd02Icon />,
    // action: handleOpenFeedbackModal,
  },
];
