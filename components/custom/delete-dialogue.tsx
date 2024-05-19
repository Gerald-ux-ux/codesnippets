"use client";

import clsx from "clsx";

import { FormButton } from "./form-button";
import { formBtn } from "@/app/styles/styles";
import useDelete from "@/app/snippets/add/hooks/useDelete";
import { cn } from "@/lib/utils";

type Props = {
  setOpen: (value: boolean) => void;
  actionItem: string;
  id: any;
  snippet: string;
};

export default function DeleteDialog({
  setOpen,
  actionItem,
  id,
  snippet,
}: Props) {
  const { handleDelete } = useDelete({
    setOpen,
    id,
    snippet,
  });

  return (
    <form action={handleDelete} className="flex  h-full  flex-col gap-2">
      <span>
        This will delete the current <strong>{actionItem}</strong>{" "}
      </span>
      <span className="flex-grow " />
      <span className="mb-2 flex  flex-col justify-end gap-4">
        <span className="flex w-full items-center  gap-2">
          <button onClick={() => setOpen(false)} className={formBtn}>
            Close
          </button>

          <FormButton name="Delete" className={cn(formBtn, 'hover:bg-error  border-none  text-error')} />
        </span>
      </span>
    </form>
  );
}
