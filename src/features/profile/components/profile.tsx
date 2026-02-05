import { AsyncBoundary, PhilippineTime, VisitorBadge } from "@/shared";
import { Clock } from "lucide-react";
import { PersonalImage } from "./personal-image";

export const Profile = () => {
  return (
    <div className="bg-background bg-dots rounded-xl p-5">
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
            <PhilippineTime className="me-auto text-sm" />
            <VisitorBadge className="" />
          </div>
          <div className="h-full"></div>
          <div className="h-[70%] shrink-0 bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
};
