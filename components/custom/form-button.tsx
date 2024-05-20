import { cn } from "@/lib/utils";
import BtnLoader from "./btn-loader";
// @ts-expect-error
import { useFormStatus } from "react-dom";
import { btnPadding } from "@/app/styles/styles";

interface Props {
  name: string;
  className?: string;
}
export function FormButton({ name, className }: Props) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className={cn(className, btnPadding, "items-center flex bg-brand ")}
    >
      {pending ? <BtnLoader /> : name}
    </button>
  );
}
