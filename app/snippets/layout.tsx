import { cn } from "@/lib/utils";
import { page } from "../styles/styles";
import NavBar from "../components/nav/nav-bar";
import { snippetItems } from "../components/nav/menus";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code Snippets - Boost your productivity",
  description: "Search, copy and paste snippets directly to your project",
};
export default function SnippetRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col ", page)}>
      <NavBar navItems={snippetItems} isSnippet={true} />
      {children}
    </div>
  );
}
