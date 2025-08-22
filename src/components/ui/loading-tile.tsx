import { Spinner, Skeleton } from "@heroui/react";

export const LoadingTile = () => {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 z-[100] flex items-center justify-center">
        <Spinner />
      </div>
      <Skeleton className="h-full w-full rounded-lg" />
    </div>
  );
};
