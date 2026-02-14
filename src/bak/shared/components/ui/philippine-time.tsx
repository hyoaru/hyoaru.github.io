import { cn } from "@heroui/styles";
import { forwardRef } from "react";
import { usePhilippineTime } from "../../hooks/use-philippine-time";

export const PhilippineTime = forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<"p">
>(({ className, ...rest }, ref) => {
  const formattedPhTime = usePhilippineTime();

  return (
    <p ref={ref} className={cn("text-sm", className)} {...rest}>
      {formattedPhTime}
    </p>
  );
});
