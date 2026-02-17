import { Skeleton } from "@heroui/react";
import { cn } from "@heroui/styles";
import { TriangleAlert } from "lucide-react";

type ErrorTileProps = {
  classNames?: {
    base?: string;
    icon?: string;
    skeleton?: string;
  };
};

export const ErrorTile = ({ classNames }: ErrorTileProps) => {
  return (
    <div className={cn("relative h-full w-full", classNames?.base)}>
      <TriangleAlert
        className={cn(
          "text-danger absolute inset-0 m-auto size-8",
          classNames?.icon,
        )}
      />
      <Skeleton
        animationType="pulse"
        className={cn(
          "bg-danger/10 h-full w-full rounded-lg",
          classNames?.skeleton,
        )}
      />
    </div>
  );
};
