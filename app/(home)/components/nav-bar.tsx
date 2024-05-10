"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Btn from "@/components/custom/btn";
import { redirect } from "next/navigation";
import NavItems from "./nav-items";
import { navBarItems } from "../types/home";
import Logo from "@/app/components/logo";

interface Props {}

function NavBar(props: Props) {
  return (
    <header
      className={cn(
        "relative top-0 z-20 bg-primary rounded-xl p-3  border-primary border w-full md:sticky"
      )}
    >
      <nav className="justify-between flex w-full items-center">
        <Logo />
        <ul className="md:flex hidden p-2 w-full justify-center   items-center gap-4">
          {navItems.map((item) => (
            <li key={item.label}>
              <NavItems key={item.label} items={item} />
            </li>
          ))}
        </ul>
        <Btn action={() => redirect("/")} name="Log in" />
      </nav>
    </header>
  );
}

export default NavBar;

// NavBar Items/Links
const navItems: navBarItems[] = [
  {
    label: "App",
    link: "/",
  },
  {
    label: "Community",
    link: "/",
  },
  {
    label: "Github",
    link: "/",
  },
];
