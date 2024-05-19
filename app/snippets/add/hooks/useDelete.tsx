"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { deleteCode, deleteSnippet } from "../../actions/actions";

type Props = {
  setOpen: (value: boolean) => void;
  id: string;
  snippet: string;
};
export default function useDelete({ setOpen, id, snippet }: Props) {
  const router = useRouter();
  const objId = useParams();
  async function handleDelete(formData: FormData) {
    formData.append("id", String(id));

    if (snippet === "Object") {
      console.log("id", id);
      console.log("objId", objId.slug);
      const res = await deleteCode(id, objId.slug);

      console.log("res", res);
      if (res.success) {
        router.push("/snippets");
        setOpen(false);
      } else {
        console.log('res', res.message)
        setOpen(true);
        toast.error(res?.message);
      }
    } else if (snippet === "Code") {
      console.log('running code')
      const res = await deleteSnippet(id);
console.log('res', res)
      if (res?.success) {
        if (res.data.length === 0) {
          router.push("/snippets");
        }
        setOpen(false);
      } else {
        setOpen(true);
        toast.error(res?.message);
      }
    }
  }

  return { handleDelete };
}
