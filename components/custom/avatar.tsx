import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  initials?: string;
  size?: "sm" | "md" | "lg";
};
export default function Avatar({
  src,
  alt,
  initials,
  size = "sm",
  width,
  height,
}: Props) {
  return (
    <div
      className={cn(
        "relative inline-flex select-none items-center justify-center overflow-hidden rounded-full align-middle font-medium uppercase text-primary",
        size === "sm" && "h-10 w-10 bg-tertiary text-sm",
        size === "md" && "h-14 w-14 bg-tertiary text-base",
        size === "lg" && "h-24 w-24 bg-secondary text-2xl"
      )}
    >
      {!src || src === "" ? (
        <div className="">{initials || ""}</div>
      ) : (
        <Image
          src={src}
          className="rounded-full"
          width={width}
          height={height}
          alt={alt}
          sizes="80px"
        />
      )}
    </div>
  );
}
