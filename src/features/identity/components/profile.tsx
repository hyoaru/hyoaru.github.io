import { GitRecentCommitTile } from "@/features/git";
import { RecentTrackTile } from "@/features/listening";
import {
  AsyncBoundary,
  PhilippineTime,
  VisitorBadge,
} from "@/shared/components";
import { Clock } from "lucide-react";
import { PersonalImage } from "./personal-image";

export const Profile = () => {
  const age = Math.floor(
    (new Date().getTime() - new Date("2002-08-31").getTime()) /
      (1000 * 60 * 60 * 24 * 365),
  );

  return (
    <div className="bg-background pattern-dots h-fit gap-2.5 rounded-xl p-5">
      <div className="flex w-full gap-5">
        <div className="aspect-square w-[40%] shrink-0 overflow-hidden rounded-lg">
          <AsyncBoundary>
            <PersonalImage />
          </AsyncBoundary>
        </div>
        <div className="flex flex-1 flex-col">
          <div className="flex items-center gap-2.5">
            <div className="text-xl">
              <Clock className="text-accent h-[1em] w-[1em]" />
            </div>
            <PhilippineTime className="me-auto" />
            <VisitorBadge className="" />
          </div>
          <div className="h-full"></div>
          <div className="flex h-[70%] shrink-0 flex-col gap-1">
            <AsyncBoundary>
              <GitRecentCommitTile />
            </AsyncBoundary>
            <AsyncBoundary>
              <RecentTrackTile />
            </AsyncBoundary>
          </div>
        </div>
      </div>
      <div className="h-12"></div>
      <p className="leading-5">
        A Philippines-based {age}-year-old
        <span className="text-accent font-bold">
          {
            " multi-disciplinary engineer in Fullstack Development, DevOps, Quality Engineering, and Data Science."
          }{" "}
        </span>
        Over the past few years, I’ve been building scalable applications,
        automating complex workflows, and transforming raw data into actionable
        insights. My work spans from developing web platforms and intuitive apps
        to architecting reliable systems and crafting data-driven solutions. I
        thrive at the intersection of code, systems, and intelligence — bringing
        fresh perspectives and a drive to turn ideas into impactful, meaningful
        solutions.
      </p>
    </div>
  );
};
