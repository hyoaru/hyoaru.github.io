import { forwardRef } from "react";

export const VisitorBadge = forwardRef<
  HTMLImageElement,
  React.ComponentPropsWithoutRef<"img">
>((props, ref) => {
  const baseUrl = "https://api.visitorbadge.io/api/visitors";

  const params = new URLSearchParams({
    path: "github.com/hyoaru",
    label: "visitors",
    labelColor: "#ffffff",
    countColor: "#eeeeee",
    style: "flat-square",
    labelStyle: "upper",
  });

  const fullUrl = `${baseUrl}?${params.toString()}`;

  return <img ref={ref} {...props} src={fullUrl} alt="Visitor Badge" />;
});
