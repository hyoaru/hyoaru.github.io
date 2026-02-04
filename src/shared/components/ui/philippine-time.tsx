import { forwardRef } from "react";
import { usePhilippineTime } from "../../hooks/use-philippine-time";

export const PhilippineTime = forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<"p">
>((props, ref) => {
  const formattedPhTime = usePhilippineTime();

  return (
    <p ref={ref} {...props}>
      {formattedPhTime}
    </p>
  );
});
