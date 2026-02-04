import { ErrorTile, LoadingTile, PhilippineTime, VisitorBadge } from "@/shared";
import { Clock } from "lucide-react";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { PersonalImage } from "./personal-image";

export const Profile = () => {
  return (
    <div className="bg-background bg-dots rounded-xl p-5">
      <div className="flex w-full gap-5">
        <div className="aspect-square w-[40%] shrink-0 overflow-hidden rounded-lg">
          <ErrorBoundary fallback={<ErrorTile />}>
            <Suspense fallback={<LoadingTile />}>
              <PersonalImage className="w-full" />
            </Suspense>
          </ErrorBoundary>
        </div>
        <div className="w-full">
          <div className="flex items-center gap-2.5">
            <div className="text-xl">
              <Clock className="text-accent h-[1em] w-[1em]" />
            </div>
            <PhilippineTime className="me-auto text-sm" />
            <VisitorBadge className="" />
          </div>
        </div>
      </div>
    </div>
  );
};
