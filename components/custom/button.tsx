"use client";
import React from "react";
import BtnLoader from "./btn-loader";
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";

interface Props {
  className?: string;
  button?: {
    icon?: React.ReactElement;
    label?: string;
    iconClass?: string;
    link?: string;
    labelClass?: string;
    action?: (...args: any[]) => void;
  };
  children?: React.ReactElement;
  isFormButton?: boolean;
}

function Button({ className, button, children, isFormButton }: Props) {
  const router = useRouter();
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending && isFormButton}
      onClick={(e) => {
        button?.action
          ? button?.action(e)
          : button?.link 
          ? router.push(button.link)
          : null;
      }}
      className={className}
    >
      <span className={button?.iconClass}>{button?.icon}</span>
      <span className={button?.labelClass}>
        {pending && isFormButton ? <BtnLoader /> : button?.label}
      </span>
      {children}
    </button>
  );
}

export default Button;
