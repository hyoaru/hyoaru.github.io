import { Skeleton } from "@heroui/react";
import { TriangleAlert } from "lucide-react";

export const ErrorTile = () => {
  return (
    <div className="relative h-full w-full">
      <div className="bg-danger/5 border-danger absolute inset-0 z-[100] flex items-center justify-center">
        <TriangleAlert className="text-danger" />
      </div>
      <Skeleton className="h-full w-full rounded-lg" />
    </div>
  );
};
