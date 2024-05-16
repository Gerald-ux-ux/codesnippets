"use client";
import React from "react";
import { navBarItems } from "../../(home)/types/home";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Btn from "@/components/custom/btn";
import { redirect } from "next/navigation";

interface Props {
  open: boolean;
  links: navBarItems[];
}

function MobileMenu({ open, links }: Props) {
  return (
    <nav
      className={cn(
        "md:hidden relative flex-col flex  w-full px-2",
        open ? " mt-16" : ""
      )}
    >
      {open && (
        <div className=" flex  flex-col gap-8">
          <ul className="flex gap-8  text-secondary flex-col">
            {links.map((link) => (
              <Link key={link.label} href={link.link}>
                {link.label}
              </Link>
            ))}
          </ul>

          <Btn outline action={() => redirect("/")} name="Log in" />
        </div>
      )}
    </nav>
  );
}

export default MobileMenu;
