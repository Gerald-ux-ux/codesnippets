import Modal from "@/app/snippets/components/modal";
import React from "react";
import { CiTrash } from "react-icons/ci";
import DeleteDialog from "./delete-dialogue";

interface Props {
  text: string;
  open: boolean;
  setOpen: (value: boolean) => void;
  snippet: any;
  code: any;
}

function DeleteAction({ open, setOpen, text, snippet, code }: Props) {
  console.log("code to be deleted", code);
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
            snippet={snippet}
            id={code}
            setOpen={setOpen}
            actionItem="Snippet"
          />
        }
      />
    </div>
  );
}

export default DeleteAction;
