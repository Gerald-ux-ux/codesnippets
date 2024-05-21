import Modal from "@/app/snippets/components/modal";
import React from "react";
import { CiTrash } from "react-icons/ci";
import DeleteDialog from "./delete-dialogue";

interface Props {
  text: string;
  open: boolean;
  setOpen: (value: boolean) => void;
  code: any;
  actionLabel: string;
}

function DeleteAction({ open, setOpen, text, code, actionLabel }: Props) {
  return (
    <div>
      <Modal
        triggerButton="Delete"
        dialogTitle={text}
        open={open}
        maxHeight="max-h-[210px]"
        setOpen={setOpen}
        icon={<CiTrash />}
        formComponent={
          <DeleteDialog
            actionLabel={actionLabel}
            code={code}
            setOpen={setOpen}
          />
        }
      />
    </div>
  );
}

export default DeleteAction;
