import React from "react";
import useSubmitFeedback from "../hooks/useSubmitFeedback";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import Button from "@/components/custom/button";
import { primaryButton, secondaryButton } from "@/app/styles/styles";
import Modal from "../../modal";

const inputClass =
  "w-full rounded-md border border-primary bg-secondary p-2 focus:border-none";

interface Props {
  open: boolean;
  setOpen: (values: boolean) => void;
}
export default function Feedback({ open, setOpen }: Props) {
  const { handleSubmit } = useSubmitFeedback();

  return (
    <Dialog open={open} onOpenChange={() => setOpen(!open)}>
      <DialogContent className="flex w-full  bg-primary border-none rounded-lg flex-col gap-2 py-4">
        <DialogTitle className="mb-2 mt-3"> Leave some feedback 😀</DialogTitle>

        <form action={handleSubmit}>
          <textarea
            className={cn(inputClass, "w-full ")}
            placeholder="Help improve the experience"
            rows={4}
            name="text"
          />

          <Button
            isFormButton
            className={cn(
              primaryButton,
              "hover:text-error w-full items-center text-center justify-center flex my-2  rounded-md"
            )}
            button={{
              label: "Submit",
            }}
          />
        </form>
        <DialogClose type="submit" className={secondaryButton}>
          Skip
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
