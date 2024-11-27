import { Button as NextButton } from "@nextui-org/button";
import { cn } from "@nextui-org/react";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

type ButtonIconProps = {
  children: React.ReactElement;
  className?: string;
};

export const Button = ({ children, className }: ButtonProps) => (
  <NextButton
    className={cn(
      "flex h-8 gap-2 rounded-lg bg-custom-secondary px-3 text-sm font-bold sm:text-base lg:text-sm 2xl:gap-4 2xl:text-base",
      className,
    )}
  >
    {children}
  </NextButton>
);

const ButtonIcon = ({ children, className }: ButtonIconProps) => {
  return React.cloneElement(children, {
    className: cn(
      children.props.className,
      className,
      "bg-transparent p-[4px] border border-foreground rounded-full",
    ),
    strokeWidth: 3,
  });
};

Button.Icon = ButtonIcon;
