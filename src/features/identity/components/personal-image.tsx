import { cn } from "@heroui/styles";
import { useSuspenseQuery } from "@tanstack/react-query";
import { forwardRef } from "react";
import { identityApi } from "../api";

export const PersonalImage = forwardRef<
  HTMLImageElement,
  React.ComponentPropsWithoutRef<"img">
>(({ className, ...props }, ref) => {
  const { data } = useSuspenseQuery(identityApi.query.personalImageUrl());

  return (
    <img
      ref={ref}
      className={cn("h-full w-full object-cover", className)}
      src={data.imageUrl}
      {...props}
    />
  );
});
