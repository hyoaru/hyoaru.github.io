import { GitRecentCommitTile } from "@/features/git";
import { PersonalImage } from "@/features/identity";
import { ListeningRecentTrackTile } from "@/features/listening";
import { AsyncBoundary } from "@/shared/components";
import { PersonStanding } from "lucide-react";

export const ProfileMobile = () => {
  const age = Math.floor(
    (new Date().getTime() - new Date("2002-08-31").getTime()) /
      (1000 * 60 * 60 * 24 * 365),
  );

  return (
    <>
      <div className="space-y-2.5">
        <div className="aspect-[4/3] overflow-hidden rounded-lg">
          <AsyncBoundary>
            <div className="relative">
              <div className="text-background absolute bottom-0 flex h-[20%] w-full items-center gap-1 pe-4 pb-10">
                <div className="flex h-full w-24 shrink-0 items-center justify-center">
                  <PersonStanding className="size-8" />
                </div>
                <p className="text-2xs font-medium">
                  A Philippines-based {age}-year-old multi-disciplinary engineer
                  in Fullstack Development, DevOps, Quality Engineering, and
                  Data Science
                </p>
              </div>
              <PersonalImage className="aspect-[4/3] object-[center_30%]" />
            </div>
          </AsyncBoundary>
        </div>
        <div className="flex h-20 gap-1">
          <AsyncBoundary>
            <GitRecentCommitTile variant="compact" />
          </AsyncBoundary>
          <AsyncBoundary>
            <ListeningRecentTrackTile variant="compact" />
          </AsyncBoundary>
        </div>
      </div>
    </>
  );
};
