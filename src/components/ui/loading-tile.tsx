import { Spinner, Skeleton, cn } from "@heroui/react";

type LoadingTileProps = {
  className?: string;
};

export const LoadingTile = ({ className }: LoadingTileProps) => {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 z-[100] flex items-center justify-center">
        <Spinner />
      </div>
      <Skeleton className={cn("h-full w-full rounded-lg", className)} />
    </div>
  );
};
