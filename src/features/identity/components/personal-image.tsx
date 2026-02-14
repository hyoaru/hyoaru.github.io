import { cn } from "@heroui/styles";
import { useSuspenseQuery } from "@tanstack/react-query";
import { forwardRef } from "react";
import { identityApi } from "../api";

export const PersonalImage = forwardRef<
  HTMLImageElement,
  React.ComponentPropsWithoutRef<"img">
>(({ className, ...props }, ref) => {
  const { data: personalImage } = useSuspenseQuery(
    identityApi.query.personalImageUrl(),
  );

  return (
    <img
      ref={ref}
      className={cn("object-cover", className)}
      src={personalImage}
      {...props}
    />
  );
});
