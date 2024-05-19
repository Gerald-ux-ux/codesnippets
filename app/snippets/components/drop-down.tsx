"use client";
import { BsThreeDots } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Props = {
  actions: any;
  snippet: any;
  setOpen: any;
  // setSelectedSnippet?: any;
};

export default function DropDownMenuComponent({
  actions,
  snippet,
  setOpen,
}: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <BsThreeDots />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border-primary mt-6 mr-24 bg-secondary ">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {actions.map((action: any) => (
          <DropdownMenuItem
            key={action.label}
            className="flex w-full gap-2 rounded-md p-2 hover:bg-hover "
            onClick={() => action.onClick(snippet, setOpen)}
          >
            {action.icon} {action.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
