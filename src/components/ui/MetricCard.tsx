import { cn } from "@nextui-org/react";
import { Hash } from "lucide-react";

type MetricCardProps = {
  children: React.ReactNode;
  className?: string;
};

type MetricCardHeaderProps = {
  children: React.ReactNode;
  className?: string;
};

type MetricCardValueProps = {
  children: React.ReactNode;
  className?: string;
};

type MetricCardLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export const MetricCard = ({ children, className }: MetricCardProps) => (
  <div
    className={cn(
      "flex h-[5.5rem] flex-col justify-center rounded-lg bg-custom-secondary p-2 px-6",
      className,
    )}
  >
    {children}
  </div>
);

const MetricCardHeader = ({ children, className }: MetricCardHeaderProps) => (
  <div className={cn("flex justify-between", className)}>{children}</div>
);

const MetricCardLabel = ({ children, className }: MetricCardLabelProps) => (
  <div className="flex w-full items-center justify-between text-sm sm:text-base lg:text-sm 2xl:text-base">
    <p className={cn("font-mono uppercase", className)}>{children}</p>
    <Hash className="hidden size-4 sm:size-5 lg:size-4 2xl:size-5" />
  </div>
);
const MetricCardValue = ({ children, className }: MetricCardValueProps) => (
  <p
    className={cn(
      "text-lg font-bold text-primary sm:text-xl lg:text-lg 2xl:text-xl",
      className,
    )}
  >
    {children}
  </p>
);

MetricCard.Header = MetricCardHeader;
MetricCard.Label = MetricCardLabel;
MetricCard.Value = MetricCardValue;
