"use client";
import { primaryButton, tertiaryButton } from "@/app/styles/styles";
import useDelete from "@/app/snippets/add/hooks/useDelete";
import { cn } from "@/lib/utils";
import Button from "./button";

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

  const codeLen = code?.code?.length;
  const buttonLabel = codeLen === undefined ? "Delete Snippet" : "Delete All";

  return (
    <form action={handleDelete} className="flex  h-full  flex-col gap-2">
      <span>
        {actionLabel === "snippet" ? (
          <p>
            Are you sure you want to delete this <strong>{actionLabel}</strong>?
            This action cannot be undone.
          </p>
        ) : (
          <>
            {codeLen === 1 ? (
              <p>Are you sure you want to delete this snippet?</p>
            ) : (
              <p>
                Are you sure you want to delete these <strong>{codeLen}</strong>{" "}
                snippets? This action cannot be undone.
              </p>
            )}
          </>
        )}
      </span>
      <span className="flex-grow " />
      <div className="flex w-full items-center justify-end  gap-4">
        <Button
          className={tertiaryButton}
          button={{
            label: "No close",
            action: () => setOpen(false),
          }}
        />
        <Button
          isFormButton={true}
          className={cn(primaryButton, "hover:text-error rounded-md")}
          button={{
            label: buttonLabel,
          }}
        />
      </div>
    </form>
  );
}
