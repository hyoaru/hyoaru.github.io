import { cn } from "@heroui/styles";
import { forwardRef } from "react";

export const VisitorBadge = forwardRef<
  HTMLImageElement,
  React.ComponentPropsWithoutRef<"img">
>(({ className, ...props }, ref) => {
  const params = new URLSearchParams({
    path: "github.com/hyoaru",
    labelColor: "#2F6DE6",
    countColor: "#eeeeee",
    style: "flat-square",
    labelStyle: "upper",
  });

  const fullUrl = `https://api.visitorbadge.io/api/visitors?${params.toString()}`;

  return (
    <img
      ref={ref}
      src={fullUrl}
      className={cn("h-[20px] rounded-none", className)}
      {...props}
    />
  );
});
