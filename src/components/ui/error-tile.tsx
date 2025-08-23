import { cn, Skeleton } from "@heroui/react";
import { TriangleAlert } from "lucide-react";

type ErrorTileProps = {
  className?: string;
};

export const ErrorTile = ({ className }: ErrorTileProps) => {
  return (
    <div className="relative h-full w-full">
      <div
        className={cn(
          "bg-danger/5 border-danger flex h-full w-full items-center justify-center rounded-lg border",
          className,
        )}
      >
        <TriangleAlert className="text-danger" />
      </div>
      <Skeleton className="h-full w-full rounded-lg" />
    </div>
  );
};
