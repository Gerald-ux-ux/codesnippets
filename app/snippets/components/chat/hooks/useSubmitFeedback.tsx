"use client";

import { submitFeedBack } from "@/app/snippets/actions/actions";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import toast from "react-hot-toast";

export default function useSubmitFeedback() {
  const [open, setOpen] = useState<boolean>(false);
  const { user: userIs } = useUser();

  const userEmail = userIs?.primaryEmailAddress?.emailAddress;

  const [user] = useState<any>(userEmail ? userEmail : "username@gmail.com");

  const handleSubmit = async (formData: FormData) => {
    formData.set("from", user);
    const res = await submitFeedBack(formData);
    if (res.success) {
      setOpen(false);
    } else {
      setOpen(true);
      toast.error(res.message);
    }
  };

  return { open, setOpen, handleSubmit };
}
