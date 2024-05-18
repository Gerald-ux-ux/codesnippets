import { capsFirstLetter } from "@/lib/utils";
// import { removeDuplicates } from "../../../lib/utils";

export default function SnippetTags({ snippet }: { snippet: any }) {
  return (
    <div className="flex flex-col gap-1  h-full justify-end">
      <p className="font-semibold text-secondary">Tags</p>
      <span className="flex flex-row gap-2 ">
        {snippet?.code?.map((tag: any) => (
          <span
            key={tag}
            className=" whitespace-nowrap  rounded-md bg-secondary border border-primary p-1.5 text-sm text-secondary "
          >
            {capsFirstLetter(tag.language)}
          </span>
        ))}
      </span>
    </div>
  );
}
