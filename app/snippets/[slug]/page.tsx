import { getCodeSnippets } from "@/app/snippets/actions/actions";
import SnippetTags from "@/app/snippets/components/snippet-tags";
import SnippetCodeList from "@/app/snippets/components/SnippetCodeList";
import { page } from "@/app/styles/styles";
import Avatar from "@/components/custom/avatar";
import BackBtn from "@/components/custom/back-btn";
import { cn } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
import { notFound } from "next/navigation";

import Actions from "../components/actions-component";
import Button from "@/components/custom/button";
import { IoMdArrowRoundBack } from "react-icons/io";

type Props = {
  params: {
    title: string;
    slug: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props) {
  const specificSnippet = await getCodeSnippets();

  const code = specificSnippet?.find((snippet) => snippet?._id === params.slug);

  return {
    title: `${code?.title} | ${code?.author.name}`,
    description: `${code?.description}`,
  };
}

export default async function Code({ params }: { params: any }) {
  const specificSnippet = await getCodeSnippets();
  const code = specificSnippet?.find((snippet) => snippet?._id === params.slug);
  const author = code?.author.id;
  const { userId } = auth();

  if (!code) return notFound();
  return (
    <div className={cn(page, "")}>
      <div className="flex items-center  w-full justify-between">
        <BackBtn  />

        {userId === code.author.id && (
          <Actions
            actionLabel="code"
            modalActionTitle="Delete everything"
            code={code}
          />
        )}
      </div>
      <div className="my-4 flex   w-full justify-between  items-center gap-4 ">
        <h1 className=" text-xl  font-bold leading-tight tracking-tight text-primary md:text-3xl">
          {code.title}
        </h1>

        <div className="flex items-center gap-4">
          {/* <Avatar
            alt={code?.author.first_name}
            width={40}
            initials={`${code.author.first_name[0]}${code.author.last_name[0]}`}
            height={40}
            src={code?.author?.photo}
            size="sm"
          /> */}
        </div>
      </div>

      <span className="flex w-full items-center justify-between text-lg leading-tight text-primary md:text-xl">
        {code.description}
      </span>
      <span className="flex w-full items-center justify-between gap-2 text-secondary">
        <span className="flex items-center gap-2">
          <Avatar
            alt={code?.author.first_name}
            width={40}
            initials={`${code.author.first_name[0]}${code.author.last_name[0]}`}
            height={40}
            src={code?.author?.photo}
            size="sm"
          />
          {code.author.first_name} {code.author.last_name}
        </span>
        <span>
          Clones <strong>{code.copy_count}</strong>
        </span>
      </span>
      <div className=" prose prose-neutral flex animate-in flex-col w-full gap-2">
        {code.code.map((tag: any) => (
          <SnippetCodeList
            code={tag}
            key={tag._id}
            user={userId}
            author={author!}
          />
        ))}
        <SnippetTags snippet={code} />
      </div>
    </div>
  );
}
