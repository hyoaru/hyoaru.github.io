import { cn, Skeleton, Spinner } from "@nextui-org/react";

type LoadingTileProps = {
  className?: string;
};

export default function LoadingTile({ className }: LoadingTileProps) {
  return (
    <div className="h-full w-full relative">
      <div className="absolute flex inset-0 items-center z-[100] justify-center">
        <Spinner />
      </div>
      <Skeleton className={cn("rounded-lg h-full w-full", className)} />
    </div>
  );
}
