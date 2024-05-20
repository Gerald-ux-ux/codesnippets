"use client";
import { FormButton } from "./form-button";
import { formBtn } from "@/app/styles/styles";
import useDelete from "@/app/snippets/add/hooks/useDelete";
import { cn } from "@/lib/utils";

type Props = {
  setOpen: (value: boolean) => void;
  code: any;
  actionLabel: string;
};

export default function DeleteDialog({ setOpen, code, actionLabel }: Props) {
  const { handleDelete } = useDelete({
    setOpen,
    code,
    actionLabel,
  });

  return (
    <form action={handleDelete} className="flex  h-full  flex-col gap-2">
      <span>
        {actionLabel === "snippet" ? (
          <p>
            Are you sure you want to delete this <strong>{actionLabel}</strong>?
            This action cannot be undone.
          </p>
        ) : (
          <p>
            Are you sure you want to everything? <br />
            This action cannot be undone.
          </p>
        )}
      </span>
      <span className="flex-grow " />
      <span className="mb-2 flex  flex-col justify-end gap-4">
        <span className="flex w-full items-center  gap-2">
          <button onClick={() => setOpen(false)} className={formBtn}>
            Close
          </button>

          <FormButton
            name="Delete"
            className={cn(formBtn, "hover:bg-error  border-none  text-error")}
          />
        </span>
      </span>
    </form>
  );
}
