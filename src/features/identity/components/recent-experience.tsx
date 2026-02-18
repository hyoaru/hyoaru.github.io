import { useSuspenseQuery } from "@tanstack/react-query";
import { Building2 } from "lucide-react";
import { identityApi } from "../api";
import { AsyncBoundary } from "@/shared/components";

const Experience = () => {
  const { data } = useSuspenseQuery(identityApi.query.careerHistory());
  const recentExperience = data.careerHistory.at(-1);

  return (
    <div className="sm:bg-background flex h-full items-center justify-start gap-1 rounded-xl sm:p-1">
      <div className="flex h-full w-24 shrink-0 items-center justify-center rounded-lg sm:w-26">
        <Building2 className="size-8" />
      </div>
      <div className="sm:bg-default flex h-full w-full flex-col justify-center gap-0 rounded-lg leading-none font-medium sm:px-8">
        <p className="text-accent xs:text-sm text-xs font-bold sm:text-base">
          {recentExperience?.title}
        </p>
        <p className="text-xs sm:text-sm">{recentExperience?.organization}</p>
      </div>
    </div>
  );
};

export const RecentExperience = () => {
  return (
    <>
      <div className="h-16 sm:h-24">
        <AsyncBoundary>
          <Experience />
        </AsyncBoundary>
      </div>
    </>
  );
};
