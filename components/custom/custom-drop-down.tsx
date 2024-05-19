import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
interface Props {
  trigger: any;
  label: any;
  items: any;
}

function CustomDropDown({ trigger, label, items }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border-none">
        {trigger}
      </DropdownMenuTrigger>

      <DropdownMenuContent className="bg-secondary border mt-4 mr-24 border-primary ">
        <DropdownMenuLabel>{label}</DropdownMenuLabel>
        <DropdownMenuSeparator className="border-b border-gradient" />
        {items.map((item: any) => (
          <DropdownMenuItem
            key={item.label}
            onClick={item.onClick}
            className={cn(
              item.isImportant
                ? "hover:bg-error  cursor-pointer text-error p-2 rounded-md"
                : "flex w-full gap-2 rounded-md p-2 hover:bg-hover"
            )}
          >
            {item.icon ? item.icon : null} {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default CustomDropDown;
