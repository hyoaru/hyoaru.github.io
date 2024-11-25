import { cn } from "@nextui-org/react";
import { Hash } from "lucide-react";

type MetricCardProps = {
  children: React.ReactNode;
  className?: string;
};

type MetricCardIconProps = {
  children: React.ReactNode;
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
      "rounded-lg bg-custom-secondary p-4 px-6 flex flex-col justify-center",
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
  <p className={cn("uppercase font-mono", className)}>{children}</p>
);
const MetricCardValue = ({ children, className }: MetricCardValueProps) => (
  <p className={cn("font-bold text-primary text-xl", className)}>{children}</p>
);

const MetricCardIcon = ({ children }: MetricCardIconProps) => <>{children}</>;

MetricCard.Header = MetricCardHeader;
MetricCard.Label = MetricCardLabel;
MetricCard.Value = MetricCardValue;
MetricCard.Icon = MetricCardIcon;
