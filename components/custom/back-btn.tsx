"use client";
import { tertiaryButton } from "@/app/styles/styles";
import { useRouter } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function BackBtn() {
  const router = useRouter();

  return (
    <button className={tertiaryButton} onClick={() => router.back()}>
      <IoMdArrowRoundBack className="text-xl" />
      Go back
    </button>
  );
}
