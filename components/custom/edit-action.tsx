import EditSnippetForm from "@/app/snippets/components/edit-snippet-form";
import Modal from "@/app/snippets/components/modal";
import React from "react";
import { CiEdit } from "react-icons/ci";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
  snippet: any;
}

function EditAction({ open, setOpen, snippet }: Props) {
  console.log("editable snippet", snippet);
  return (
    <div className="">
      <Modal
        triggerButton="Edit"
        dialogTitle="Edit Snippet"
        open={open}
        maxHeight="max-h-[820px]"
        maxWidth="max-w-[600px]"
        setOpen={setOpen}
        icon={<CiEdit />}
        formComponent={
          <EditSnippetForm
            setOpen={setOpen}
            selectedSnippet={snippet}
            name="Snippet"
          />
        }
      />
    </div>
  );
}

export default EditAction;
