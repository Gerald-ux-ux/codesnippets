import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function capsFirstLetter(x: any) {
  return x?.charAt(0)?.toUpperCase() + x?.slice(1);
}
export const formatDate = (date: any) => {
  return new Date(date).toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
};


export function handleFilter (option : any, data: any) {



}


export function convertMongoDocument(doc: any) {
  const convertedDoc = {
    ...doc,
    _id: doc._id.toString(),
  };

  return convertedDoc;
}
