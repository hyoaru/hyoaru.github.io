import { cn } from "@heroui/styles";

export const Filler = ({
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={cn(
        "bg-background pattern-dots h-full w-full rounded-xl",
        className,
      )}
      {...rest}
    />
  );
};
