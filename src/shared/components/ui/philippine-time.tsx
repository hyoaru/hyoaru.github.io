import { cn } from "@heroui/styles";
import { forwardRef, useEffect, useState } from "react";

const formatPH = (date: Date) => {
  return new Intl.DateTimeFormat("en-PH", {
    timeZone: "Asia/Manila",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date);
};

export const PhilippineTime = forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<"p">
>(({ className, ...rest }, ref) => {
  const [time, setTime] = useState(() => formatPH(new Date()));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(formatPH(new Date()));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p ref={ref} className={cn("text-sm", className)} {...rest}>
      {time}
    </p>
  );
});
