import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "white" | "dark";
  size?: "sm" | "md" | "lg";
  href?: string;
  withArrow?: boolean;
  arrowDirection?: "up-right" | "right";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  withArrow = false,
  arrowDirection = "up-right",
  className = "",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-bold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0f7b44]/40 active:scale-[0.98] cursor-pointer group";

  const sizeClasses = {
    sm: "text-xs py-2 px-4 gap-2",
    md: "text-[13px] py-[11px] pl-[22px] pr-[12px] gap-3",
    lg: "text-sm py-3 px-6 gap-3",
  }[size];

  const variantClasses = {
    primary:
      "bg-[#0b3b24] hover:bg-[#072a1a] text-white shadow-md hover:shadow-lg",
    secondary:
      "bg-white hover:bg-neutral-50 text-[#1f2937] border border-neutral-300 hover:border-neutral-400 shadow-xs",
    outline:
      "bg-transparent hover:bg-emerald-50/50 text-[#0b3b24] border border-[#d1fae5]",
    white:
      "bg-white hover:bg-neutral-100 text-[#0b3b24] shadow-md hover:shadow-lg",
    dark:
      "bg-[#071d11] hover:bg-[#0b3b24] text-white border border-white/10",
  }[variant];

  const arrowIcon = (
    <span
      className={`inline-flex w-[22px] h-[22px] rounded-full items-center justify-center flex-none transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
        variant === "primary"
          ? "bg-white text-[#0b3b24]"
          : variant === "secondary" || variant === "outline"
          ? "border border-neutral-300 text-[#0f7b44]"
          : "bg-[#0b3b24] text-white"
      }`}
    >
      {arrowDirection === "up-right" ? (
        <svg
          width="11"
          height="11"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M7 17L17 7M8 7h9v9" />
        </svg>
      ) : (
        <svg
          width="11"
          height="11"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      )}
    </span>
  );

  const combinedClasses = `group ${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        <span>{children}</span>
        {withArrow && arrowIcon}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      <span>{children}</span>
      {withArrow && arrowIcon}
    </button>
  );
};
