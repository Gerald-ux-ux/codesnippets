"use client";

import { useState } from "react";
import { CiEdit, CiTrash } from "react-icons/ci";

export default function useActions() {
  const [open, setOpen] = useState<boolean>(false);

  const deleteAction = [
    {
      label: "Delete",
      icon: <CiTrash />,
      onClick: () => {
        setOpen(true);
      },
    },
  ];

  const allActions = [
    {
      label: "Edit",
      icon: <CiEdit />,
      onClick: () => {
        setOpen(true);
      },
    },
    {
      label: "Delete",
      icon: <CiTrash />,
      onClick: () => {
        setOpen(true);
      },
    },
  ];

  return {
    deleteAction,
    allActions,
    setOpen,
    open,
  };
}
