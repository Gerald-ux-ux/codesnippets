"use client";
import React from "react";
import { navBarItems } from "../../(home)/types/home";
import { cn } from "@/lib/utils";
import Button from "@/components/custom/button";

interface Props {
  open: boolean;
  links: navBarItems[];
}

function MobileMenu({ open, links }: Props) {
  return (
    <nav
      className={cn(
        "md:hidden relative flex-col flex   w-full px-2",
        open ? " mt-16" : ""
      )}
    >
      {open && (
        <div className=" flex  flex-col gap-8">
          <ul className="flex gap-8  text-secondary flex-col">
            {links.map((link) => (
              <Button
                className="text-base font-light flex items-center gap-2  bg-secondary border border-primary hover:bg-hover hover:text-primary text-secondary px-4 py-2 rounded-md "
                key={link.label}
                button={{
                  icon: link.icon,
                  label: link.label,
                  action: link.action,
                  link: link.link,
                }}
              />
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default MobileMenu;
