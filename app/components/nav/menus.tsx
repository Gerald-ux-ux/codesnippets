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
    link: "/",
  },
];

export const snippetItems: navBarItems[] = [
  {
    label: "Join the community",
    link: "/",
    icon: <DiscordIcon />,
  },
  {
    label: "Feedback",
    link: "/",
    icon: <CommentAdd02Icon />,
  },
];
