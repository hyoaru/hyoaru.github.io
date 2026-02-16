import { AsyncBoundary } from "@/shared/components";
import { cn } from "@heroui/styles";
import { useSuspenseQuery } from "@tanstack/react-query";
import { visitorApi } from "../api";

const VisitorBadgeContent = ({
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"span">) => {
  const { data } = useSuspenseQuery(visitorApi.query.count());

  return (
    <p className={cn("space-x-1 font-mono text-xs", className)} {...rest}>
      <span className="">VISITORS</span>
      <span className="bg-default rounded-sm p-0.5">
        {data.count.toLocaleString()}
      </span>
    </p>
  );
};

export const VisitorBadge = (
  props: React.ComponentPropsWithoutRef<typeof VisitorBadgeContent>,
) => {
  return (
    <AsyncBoundary>
      <VisitorBadgeContent {...props} />
    </AsyncBoundary>
  );
};
