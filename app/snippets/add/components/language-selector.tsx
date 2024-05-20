"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

type Props = {
  onSelect: (language: { label: string; value: string }) => void;
  className?: string;
  trigger?: string;
  values?: any;
};

export default function LanguageSelector({
  onSelect,
  className,
  trigger,
  values,
}: Props) {
  return (
    <div className={cn(className, "hover:text-secondary cursor-pointer")}>
      <Select onValueChange={(value) => onSelect({ label: value, value })}>
        <SelectTrigger className="gap-1 border-none">
          <SelectValue placeholder={trigger} />
        </SelectTrigger>
        <SelectContent className="border-none    bg-hover">
          <SelectGroup>
            {values?.map((value: any) => (
              <SelectItem
                key={value.value}
                className="w-full rounded-md p-2 hover:bg-primary hover:text-secondary"
                value={value.value}
              >
                {value.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
