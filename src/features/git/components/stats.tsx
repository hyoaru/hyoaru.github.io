import { AsyncBoundary } from "@/shared/components";
import { GitGraph } from "lucide-react";
import { GitContributionsMetricTile } from "./contributions-metric-tile";
import { GitRepositoriesMetricTile } from "./repositories-metric-tile";

export const GitStats = () => {
  return (
    <div className="bg-background flex h-20 items-center gap-1 rounded-xl sm:h-24 sm:p-1">
      <div className="hidden h-full w-26 shrink-0 items-center justify-center rounded-lg sm:flex">
        <GitGraph className="size-8" />
      </div>
      <div className="flex h-full w-full items-center gap-1">
        <div className="grid h-full w-full grid-cols-2 gap-1">
          <AsyncBoundary>
            <GitRepositoriesMetricTile />
          </AsyncBoundary>
          <AsyncBoundary>
            <GitContributionsMetricTile />
          </AsyncBoundary>
        </div>
      </div>
    </div>
  );
};
