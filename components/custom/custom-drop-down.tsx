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

interface ItemProps {
  label: string;
  onClick: (snippet?: any, setOpen?: any) => void;
  isImportant?: boolean;
  icon?: React.ReactNode;
  snippet?: any;
  setOpen?: any;
}
interface Props {
  trigger: any;
  label: any;
  items: any;
  className?: string;
}

function CustomDropDown({ trigger, label, items, className }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border-none">
        {trigger}
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className={cn(
          className,
          "bg-secondary border mt-4 mr-24 border-primary "
        )}
      >
        <DropdownMenuLabel className="" >{label}</DropdownMenuLabel>
        <DropdownMenuSeparator className="border-b border-gradient" />
        {items.map((item: any) => (
          <DropdownMenuItem
            key={item.label}
            onClick={item.onClick}
            className={cn(
              item.isImportant
                ? "hover:bg-error  gap-2  cursor-pointer text-error p-2 rounded-md"
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
