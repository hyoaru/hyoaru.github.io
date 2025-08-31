import { Image } from "@heroui/react";
import { Heart } from "lucide-react";
import { PhilippineTime } from "../components/common/philippine-time";
import { EmploymentStatus } from "@/components/common/employment-status";
import { GithubRecentCommitTile } from "@/components/features/github/github-recent-commit-tile";
import { LastFmRecentTrackTile } from "@/components/features/last-fm/lastfm-recent-track-tile";

const optimizedImages: Record<string, string> = import.meta.glob(
  "../assets/portfolio-resources/assets/images/*.jpg",
  { eager: true, import: "default", query: "?format=webp&meta" },
);

const personalImageKey = Object.keys(optimizedImages).find((key) =>
  key.includes("personal-image.jpg"),
)!;

export const Main = () => {
  const personalImage = optimizedImages[personalImageKey];

  return (
    <div className="bg-background flex flex-col gap-12 rounded-xl p-6 lg:p-4 xl:gap-16 2xl:p-6">
      <div className="grid grid-cols-12 gap-6 lg:gap-4 2xl:gap-6">
        <div className="order-last col-span-full sm:order-first sm:col-span-5 lg:col-span-6 xl:col-span-5">
          <div className="relative h-full w-full">
            <Heart
              fill="#f472b6"
              className="peer absolute right-[30%] bottom-[2rem] z-[100] size-6 text-pink-400 opacity-0 hover:animate-pulse hover:opacity-100"
            />
            <div className="absolute top-0 z-[100] flex w-full justify-end p-3 text-sm text-pink-400 opacity-0 peer-hover:animate-pulse peer-hover:opacity-100">
              <p>{"Hey there, jiya :)"}</p>
            </div>
            <div className="absolute inset-0 z-[11] flex items-end p-6 lg:flex lg:p-5 xl:flex">
              <EmploymentStatus />
            </div>
            <div className="relative z-[0]">
              <Image
                src={personalImage}
                className="h-[50%] w-full object-cover"
                removeWrapper
              />
            </div>
          </div>
        </div>
        <div className="order-first col-span-full flex flex-col sm:order-last sm:col-span-7 lg:col-span-6 xl:col-span-7">
          <div className="rows-span-2 flex w-full items-center justify-between text-sm sm:text-base lg:text-sm 2xl:text-base">
            <PhilippineTime />
            <Image
              radius="none"
              src="https://api.visitorbadge.io/api/visitors?path=github.com%2Fhyoaru&label=visitors&labelColor=%23006fee&countColor=%23eeeeee&style=flat-square&labelStyle=upper"
            />
          </div>
          <div className="mt-auto hidden h-[68%] sm:block lg:hidden lg:h-[68%] xl:block">
            <div className="grid h-full grid-rows-2 gap-1">
              <GithubRecentCommitTile />
              <LastFmRecentTrackTile />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-auto text-xs sm:text-base lg:text-sm 2xl:text-base">
        <p className="">
          A Philippines based 22 year old
          <span className="text-primary font-bold">
            {
              " multi-disciplinary creative and a data scientist in the making."
            }{" "}
          </span>
          Over the past few years, I’ve been blending creativity with technology
          to craft impactful digital experiences. From building dynamic websites
          and intuitive apps to designing compelling layouts and diving deep
          into data science, I thrive at the intersection of innovation and
          problem-solving. Bringing fresh perspectives and a passion for
          transforming ideas into meaningful solutions.
        </p>
      </div>
    </div>
  );
};
