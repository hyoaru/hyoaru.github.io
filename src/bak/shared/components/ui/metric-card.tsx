import { cn } from "@heroui/styles";
import { Hash } from "lucide-react";

type MetricCardLabelProps = {
  children: React.ReactNode;
  classNames?: {
    base?: string;
    label?: string;
    icon?: string;
  };
};

export const MetricCard = ({
  children,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"div">) => (
  <div className={cn("bg-default rounded-lg", className)} {...rest}>
    {children}
  </div>
);

const MetricCardBody = ({
  children,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"div">) => (
  <div
    className={cn(
      "mx-auto flex h-full w-[80%] flex-col justify-center leading-0",
      className,
    )}
    {...rest}
  >
    {children}
  </div>
);

const MetricCardLabel = ({ children, classNames }: MetricCardLabelProps) => (
  <div
    className={cn(
      "dark:text-accent flex w-full items-center justify-between",
      classNames?.base,
    )}
  >
    <p className={cn("font-mono uppercase", classNames?.label)}>{children}</p>
    <Hash className={cn("size-5", classNames?.icon)} />
  </div>
);
const MetricCardValue = ({
  children,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"div">) => (
  <p
    className={cn(
      "text-accent dark:text-foreground text-xl font-bold",
      className,
    )}
    {...rest}
  >
    {children}
  </p>
);

MetricCard.Body = MetricCardBody;
MetricCard.Label = MetricCardLabel;
MetricCard.Value = MetricCardValue;
