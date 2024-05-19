import { cn } from "@/lib/utils";
import BtnLoader from "./btn-loader";
// @ts-expect-error
import { useFormStatus } from "react-dom";

interface Props {
  name: string;
  className?: string;
}
export function FormButton({ name, className }: Props) {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} className={cn(className, 'items-center flex justify-center')}>
      {pending ? <BtnLoader /> : name}
    </button>
  );
}
