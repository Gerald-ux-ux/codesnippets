"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { values } from "./languages";

type Props = {
  language: { label: string; value: string };
  onSelect: (language: { label: string; value: string }) => void;
};
export default function LanguageSelector({ language, onSelect }: Props) {
  return (
    <div className="hover:text-secondary cursor-pointer">
      <Select onValueChange={(value) => onSelect({ label: value, value })}>
        <SelectTrigger className="w-[180px] border-none">
          <SelectValue placeholder={language.label} />
        </SelectTrigger>
        <SelectContent className="border-none  bg-hover">
          <SelectGroup>
            {values.map((value) => (
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
