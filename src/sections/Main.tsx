import GithubRecentCommitTile from "@/components/github/GithubRecentCommitTile";
import LastFmRecentTrackTitle from "@/components/last-fm/LastFmRecentTrackTile";
import EmploymentStatus from "@/components/shared/EmploymentStatus";
import usePhilippineTime from "@/hooks/usePhilippineTime";
import { coreService } from "@/services/core";
import { Image } from "@nextui-org/image";
import { Heart } from "lucide-react";

export default function Main() {
  const mainImageUrl = coreService.getMainImageUrl();

  return (
    <div className="flex flex-col gap-12 rounded-xl bg-background p-6 lg:p-4 xl:gap-16 2xl:p-6">
      <div className="grid grid-cols-12 gap-6 lg:gap-4 2xl:gap-6">
        <div className="order-last col-span-full sm:order-first sm:col-span-5 lg:col-span-6 xl:col-span-5">
          <div className="relative h-full w-full">
            <Heart
              fill="#f472b6"
              className="peer absolute bottom-[2rem] right-[30%] z-[100] size-6 rounded-xl text-pink-400 opacity-0 hover:animate-pulse hover:opacity-100"
            />
            <div className="absolute top-0 z-[100] flex w-full justify-end p-3 text-sm text-pink-400 opacity-0 transition-all duration-300 ease-in-out peer-hover:opacity-100">
              <p>{"Hey there, jiya :)"}</p>
            </div>
            <div className="absolute inset-0 z-[11] flex items-end p-6 lg:flex lg:p-5 xl:flex">
              <EmploymentStatus />
            </div>
            <Image
              src={mainImageUrl}
              classNames={{
                wrapper: "h-full w-full object-cover",
                img: "h-full w-full object-cover",
              }}
            />
          </div>
        </div>
        <div className="order-first col-span-full flex flex-col sm:order-last sm:col-span-7 lg:col-span-6 xl:col-span-7">
          <div className="rows-span-2 flex w-full justify-between text-sm sm:text-base lg:text-sm 2xl:text-base">
            <div className="flex gap-2 2xl:gap-4">
              <p className="font-bold underline">EN</p>
              <p>FIL</p>
            </div>
            <PHTime />
          </div>
          <div className="mt-auto hidden h-[68%] sm:block lg:hidden lg:h-[68%] xl:block">
            <div className="grid h-full grid-rows-2 gap-1">
              <GithubRecentCommitTile />
              <LastFmRecentTrackTitle />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-auto text-sm sm:text-base lg:text-sm 2xl:text-base">
        <p className="">
          A Philippines based 22 year old
          <span className="font-bold text-primary">
            {" multi-disciplinary creative and a data scientist in the making."}{" "}
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
}

function PHTime() {
  const phTime = usePhilippineTime();
  return <p>{phTime}</p>;
}
