"use client";
import Btn from "@/components/custom/btn";
import { firaMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React from "react";

interface Props {}

function ProductDemo(props: Props) {
  return (
    <div className="h-[30rem] w-full  bg-secondary  bg-grid-white/[0.2]  relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0  flex items-center justify-center  bg-secondary [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <span
        className={cn(
          "text-2xl  flex flex-col gap-8 sm:text-4xl mx-auto px-8  font-bold relative z-20 bg-clip-text text-transparent  bg-gradient-to-b from-neutral-100 to-neutral-500 py-8",
          firaMono.className
        )}
      >
        Streamline your development workflow. <br />
        <h6 className=" text-secondary">
          Waste no time trying to write when you can copy & paste the code to
          your IDE
        </h6>
      </span>
    </div>
  );
}

export default ProductDemo;
