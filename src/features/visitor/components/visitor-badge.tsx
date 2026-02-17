import { cn } from "@heroui/styles";
import { useSuspenseQuery } from "@tanstack/react-query";
import { visitorApi } from "../api";

export const VisitorBadge = ({
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"p">) => {
  const { data } = useSuspenseQuery(visitorApi.query.count());

  return (
    <p
      className={cn("xs:text-sm space-x-1 font-mono text-xs", className)}
      {...rest}
    >
      <span className="text-foreground/60">VISITORS</span>
      <span className="bg-default rounded-sm p-0.5">
        {data.count.toLocaleString()}
      </span>
    </p>
  );
};
