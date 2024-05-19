"use client";
import { useRouter } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function BackBtn() {
  const router = useRouter();

  return (
    <button
      className="flex w-44 items-center md:text-base text-sm gap-2 rounded-md p-3 hover:bg-hover  bg-secondary border border-primary"
      onClick={() => router.back()}
    >
      <IoMdArrowRoundBack className="text-2xl" />
      Go back
    </button>
  );
}
