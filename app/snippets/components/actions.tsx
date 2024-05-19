"use client";
import { CiEdit, CiTrash } from "react-icons/ci";
import CustomDropDown from "@/components/custom/custom-drop-down";
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";
import DeleteAction from "@/components/custom/delete-action";
import EditAction from "@/components/custom/edit-action";

type Props = {
  code?: any;
  snippet: string;
  modalActionTitle: string;
};

export default function Actions({ code, snippet, modalActionTitle }: Props) {
  const [deleteIsOpen, setDeleteIsOpen] = useState<boolean>(false);
  const [editIsOpen, setEditIsOpen] = useState<boolean>(false);

  const allActions = [
    {
      label: "Edit",
      icon: <CiEdit />,
      onClick: () => {
        console.log("Edit is clicked");
        setEditIsOpen(true);
      },
    },
    {
      label: "Delete",
      icon: <CiTrash />,
      isImportant: true,
      onClick: () => {
        console.log("Delete is clicked");
        setDeleteIsOpen(true);
      },
    },
  ];

  return (
    <div className="">
      <CustomDropDown
        trigger={<BsThreeDots />}
        label="Actions"
        items={allActions}
      />
      {deleteIsOpen && (
        <DeleteAction
          snippet={snippet}
          code={code}
          open={deleteIsOpen}
          setOpen={setDeleteIsOpen}
          text={modalActionTitle}
        />
      )}

      {editIsOpen && (
        <div className="">
          <EditAction
            open={editIsOpen}
            setOpen={setEditIsOpen}
            snippet={code}
          />
        </div>
      )}
    </div>
  );
}
