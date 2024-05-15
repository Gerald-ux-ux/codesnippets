import Image from "next/image";
import logo from "@/public/gallery/cs_.png";
import Link from "next/link";
export default function Logo({ platform }: { platform?: string }) {
  return (
    <Link href="/" className="flex   items-center gap-2">
      <Image src={logo} alt="Cs Logo" className="h-12 rounded-xl w-12 " />
      <p className="text-secondary hover:text-primary text-lg font-semibold">
       {platform}
      </p>
    </Link>
  );
}
