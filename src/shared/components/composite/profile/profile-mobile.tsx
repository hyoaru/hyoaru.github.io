import { PersonalImage } from "@/features/identity";
import { AsyncBoundary } from "@/shared/components";
import { PersonStanding } from "lucide-react";

export const ProfileMobile = () => {
  const age = Math.floor(
    (new Date().getTime() - new Date("2002-08-31").getTime()) /
      (1000 * 60 * 60 * 24 * 365),
  );

  return (
    <AsyncBoundary>
      <div className="relative overflow-hidden rounded-lg">
        <div className="text-background absolute bottom-0 flex h-[20%] w-full items-center gap-4 p-4 pb-10">
          <div className="flex h-full items-center justify-center">
            <PersonStanding />
          </div>
          <p className="text-[0.65rem] font-medium">
            A Philippines-based {age}-year-old multi-disciplinary engineer in
            Fullstack Development, DevOps, Quality Engineering, and Data Science
          </p>
        </div>
        <PersonalImage className="aspect-[4/3] object-[center_30%]" />
      </div>
    </AsyncBoundary>
  );
};
