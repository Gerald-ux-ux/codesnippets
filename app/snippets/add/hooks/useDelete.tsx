"use client";

import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { deleteCode, deleteSnippet } from "../../actions/actions";

type Props = {
  setOpen: (value: boolean) => void;
  code: any;
  actionLabel: string;
};
export default function useDelete({ setOpen, code, actionLabel }: Props) {
  const router = useRouter();
  const codeId = useParams();
  const snippetId = code._id;

  async function handleDelete() {
    if (actionLabel === "code") {
      // 'code' means the description, title and all the snippets inside
      const res = await deleteCode(codeId.slug);

      if (res.success) {
        router.push("/snippets");
        setOpen(false);
      } else {
        setOpen(true);
        // toast.error(res?.message);
      }
    } else if (actionLabel === "snippet") {
      // 'snippet' means the specific code snippet
      const res = await deleteSnippet(codeId.slug, snippetId);
      if (res.success) {
        if (res.data.code.length === 0) {
          router.push("/snippets");
        }
        setOpen(false);
      } else {
        setOpen(true);
        // toast.error(res?.message);
      }
    }
  }

  return { handleDelete };
}
