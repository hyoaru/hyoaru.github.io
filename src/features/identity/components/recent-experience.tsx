import { Building2 } from "lucide-react";

export const RecentJob = () => {
  return (
    <div className="sm:bg-background flex h-16 items-center justify-start gap-1 rounded-xl sm:h-24 sm:p-1">
      <div className="flex h-full w-24 shrink-0 items-center justify-center rounded-lg sm:w-26">
        <Building2 className="size-8" />
      </div>
      <div className="sm:bg-default flex h-full w-full flex-col justify-center gap-0 rounded-lg leading-none font-medium sm:px-8">
        <p className="text-accent xs:text-sm text-xs font-bold sm:text-base">
          Senior Associate Solutions Architect
        </p>
        <p className="text-xs sm:text-sm">Philippine Digital Asset Exchange</p>
      </div>
    </div>
  );
};
