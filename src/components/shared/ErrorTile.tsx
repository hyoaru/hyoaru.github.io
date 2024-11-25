import { cn } from "@nextui-org/react";
import { TriangleAlert } from "lucide-react";

type ErrorTileProps = {
  className?: string;
};

export default function ErrorTile({ className }: ErrorTileProps) {
  return (
    <div
      className={cn(
        "bg-danger/5 border border-danger rounded-lg flex items-center justify-center h-full w-full",
        className,
      )}
    >
      <TriangleAlert className="text-danger" />
    </div>
  );
}
