"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import NavItems from "./nav-items";
import { navBarItems } from "../../(home)/types/home";
import Logo from "@/app/components/logo";
import MobileToggleBtn from "./mobile-toggle-btn";
import MobileMenu from "./mobile-menu";

import SignUp from "@/app/auth/components/sign-up";

interface Props {
  navItems: navBarItems[];
  isSnippet?: boolean;
}

function NavBar({ navItems, isSnippet }: Props) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header
      className={cn(
        "top-4 relative z-50 items-center flex  animate-in  bg-transparent backdrop-blur-lg  rounded-xl p-2  border-primary border w-full md:sticky",
        open ? "h-auto" : "h-16"
      )}
    >
      <nav className="justify-between flex  md:flex-row flex-col p-0.5 w-full items-center">
        <div className="flex md:w-auto w-full justify-between items-center">
          <Logo platform="Code-snippets" />
          <MobileToggleBtn setOpen={setOpen} open={open} />
        </div>

        {isSnippet ? (
          <div className="flex items-center w-full md:w-auto  gap-2">
            <ul className="hidden md:flex p-2 justify-center items-center gap-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <NavItems
                    key={item.label}
                    isSnippet={isSnippet}
                    items={item}
                  />
                </li>
              ))}
            </ul>
            <SignUp />
            <MobileMenu links={navItems} open={open} />
          </div>
        ) : (
          <>
            <ul className="md:flex hidden p-2 justify-center items-center gap-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <NavItems key={item.label} items={item} />
                </li>
              ))}
            </ul>
            <SignUp />
            <MobileMenu links={navItems} open={open} />
          </>
        )}
      </nav>
    </header>
  );
}

export default NavBar;
