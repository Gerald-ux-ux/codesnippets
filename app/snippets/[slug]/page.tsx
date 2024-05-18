// import { getUserInfo } from "@/app/auth/actions/actions";
// import { notFound } from "next/navigation";
// import { FaLongArrowAltLeft, FaRegUser } from "react-icons/fa";

import { snippetItems } from "@/app/components/nav/menus";
import NavBar from "@/app/components/nav/nav-bar";
import { getCodeSnippets } from "@/app/snippets/actions/actions";
import SnippetTags from "@/app/snippets/components/snippet-tags";
import SnippetCodeList from "@/app/snippets/components/SnippetCodeList";
import { page } from "@/app/styles/styles";
import Avatar from "@/components/custom/avatar";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { notFound } from "next/navigation";
import { FaRegUser } from "react-icons/fa";

// import { getCodeSnippets } from "../actions/action";
// import DeleteSnippet from "../components/actions/delete-snippet";
// import SnippetCodeList from "../components/SnippetCodeList";
// import SnippetTags from "../components/tags";
// import BackBtn from "../components/back-btn";

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
  console.log("paras", params);
  const specificSnippet = await getCodeSnippets();

  const code = specificSnippet?.find((snippet) => snippet?._id === params.slug);

  //   console.log('code', code);
  //   const user = await getUserInfo();
  const author = code?.author.id;
  const user = undefined;

  if (!code) return notFound();
  return (
    <div className={cn(page, " w-full ")}>
      <NavBar navItems={snippetItems} isSnippet={true} />
      {/* <BackBtn /> */}
      <div className="my-4 flex  w-full  items-center gap-4 ">
        <h1 className="w-full text-xl  font-bold leading-tight tracking-tight text-primary md:text-3xl">
          {code.title}
        </h1>

        {/* {user?._id === code.author.id && (
          <DeleteSnippet
            text="Delete the whole snippet"
            code_id={code._id}
            snippet="Object"
          />
        )} */}
      </div>

      <span className="flex w-full items-center justify-between text-lg leading-tight text-secondary md:text-xl">
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
            user={user}
            author={author!}
          />
        ))}
        <SnippetTags snippet={code} />
      </div>
    </div>
  );
}
