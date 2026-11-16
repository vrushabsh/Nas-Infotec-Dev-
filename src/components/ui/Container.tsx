import React from "react";
import { LAYOUT } from "@/constants/layout";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow" | "full";
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  size = "default",
}) => {
  const sizeClasses = {
    narrow: LAYOUT.container.narrow,
    default: LAYOUT.container.default,
    wide: LAYOUT.container.wide,
    full: LAYOUT.container.full,
  }[size];

  return (
    <div
      className={`mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 ${sizeClasses} ${className}`}
    >
      {children}
    </div>
  );
};
