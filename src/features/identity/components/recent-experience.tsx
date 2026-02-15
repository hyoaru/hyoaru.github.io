import { Building2 } from "lucide-react";

export const RecentJob = () => {
  return (
    <div className="bg-background flex h-20 items-center gap-1 rounded-xl p-1">
      <div className="flex h-full w-26 shrink-0 items-center justify-center rounded-lg">
        <Building2 className="size-8" />
      </div>
      <div className="bg-default flex h-full w-full flex-col justify-center gap-0 rounded-lg px-8 leading-none font-medium">
        <p className="text-accent font-bold">
          Senior Associate Solutions Architect
        </p>
        <p className="text-sm">Philippine Digital Asset Exchange</p>
      </div>
    </div>
  );
};
