import { cn } from "@heroui/styles";
import { useSuspenseQuery } from "@tanstack/react-query";
import { forwardRef } from "react";
import { profileApi } from "../api";

export const PersonalImage = forwardRef<
  HTMLImageElement,
  React.ComponentPropsWithoutRef<"img">
>(({ className, ...props }, ref) => {
  const { data: personalImage } = useSuspenseQuery(
    profileApi.query.personalImageUrl(),
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
