import { Skeleton, Spinner } from "@heroui/react";
import { cn } from "@heroui/styles";

type LoadingTileProps = {
  classNames?: {
    base?: string;
    spinner?: string;
    skeleton?: string;
  };
};

export const LoadingTile = ({ classNames }: LoadingTileProps) => {
  return (
    <div className={cn("relative h-full w-full", classNames?.base)}>
      <Spinner
        className={cn(
          "text-accent absolute inset-0 m-auto size-8",
          classNames?.spinner,
        )}
      />
      <Skeleton
        className={cn(
          "bg-accent/[8%] h-full w-full rounded-lg",
          classNames?.skeleton,
        )}
      />
    </div>
  );
};
