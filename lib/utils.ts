import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function capsFirstLetter(x: any) {
  return x?.charAt(0)?.toUpperCase() + x?.slice(1);
}
