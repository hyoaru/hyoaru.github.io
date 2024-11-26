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
      "px-3 h-8 flex font-bold bg-custom-secondary text-base gap-4",
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
    strokeWidth: 4,
  });
};

Button.Icon = ButtonIcon;
