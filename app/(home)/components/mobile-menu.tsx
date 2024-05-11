"use client";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { navBarItems } from "../types/home";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  links: navBarItems[];
}

function MobileMenu({ open, setOpen, links }: Props) {
  return (
    <nav
      className={cn(
        "md:hidden relative flex-col flex  w-full px-2",
        open ? " mt-16" : ""
      )}
    >
      {open && (
        <ul className="flex gap-8  text-secondary flex-col">
          {links.map((link) => (
            <Link key={link.label} href={link.link}>
              {link.label}
            </Link>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default MobileMenu;
