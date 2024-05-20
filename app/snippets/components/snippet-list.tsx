"use client";
import Avatar from "@/components/custom/avatar";
import { cn, formatDate } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import SnippetTags from "./snippet-tags";
import { firaMono } from "@/lib/fonts";

interface Props {
  data: any;
}

function SnippetList({ data }: Props) {
  const searchQuery = useSearchParams();
  const searchItem = searchQuery.get("query");
  const pathname = usePathname();
  const router = useRouter();

  function handleClicked(snippet: any) {
    return router.push(`${pathname}/${snippet._id}`);
  }
  return (
    <ul className="w-full flex flex-col gap-4">
      {data
        ?.filter((snippet: any) =>
          searchItem
            ? snippet?.title?.toLowerCase()?.includes(searchItem.toLowerCase())
            : []
        )
        .sort(
          (a: any, b: any) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        .map((snippet: any, i: number) => (
          <div onClick={() => handleClicked(snippet)} key={snippet._id}>
            <li
              className={cn(
                "flex cursor-pointer  hover:bg-hover h-[210px] flex-col gap-3 rounded-xl border border-primary  p-3"
              )}
            >
              <span className="flex w-full items-center justify-between gap-2 ">
                <p
                  className={cn(
                    firaMono.className,
                    " truncate  text-sm  font-medium tracking-tight md:w-9/12 md:text-xl md:font-semibold"
                  )}
                >
                  {snippet?.title} ({snippet.code.length})
                </p>

                <span className="items-center gap-2  text-xs flex md:text-base">
                  <p className={cn(firaMono.className, "w-full")}>
                    {snippet.author.first_name} {snippet.author.last_name[0]}
                  </p>

                  <span className="block">
                    <Avatar
                      alt={snippet?.author.first_name}
                      width={40}
                      initials={`${snippet.author.first_name[0]}${snippet.author.last_name[0]}`}
                      height={40}
                      src={snippet?.author?.photo}
                      size="sm"
                    />
                  </span>
                </span>
              </span>
              <span className="flex w-full items-center justify-between  text-sm md:text-base">
                <p className="w-44 truncate text-start md:w-96 ">
                  {snippet.description}
                </p>
                <p>{formatDate(snippet.createdAt)}</p>
              </span>

              <SnippetTags snippet={snippet} />
            </li>
          </div>
        ))}
    </ul>
  );
}

export default SnippetList;
