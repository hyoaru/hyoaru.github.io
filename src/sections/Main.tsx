import GithubRecentCommitTile from "@/components/github/GithubRecentCommitTile";
import usePhilippineTime from "@/hooks/usePhilippineTime";
import { core } from "@/services/core";
import { Image } from "@nextui-org/image";
import { FileImage } from "lucide-react";

export default function Main() {
  const mainImageUrl = core.getMainImageUrl();
  const phTime = usePhilippineTime();

  return (
    <div className="bg-background p-6 rounded-xl flex flex-col gap-16">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-5">
          <div className="relative">
            <div className="absolute z-[11] inset-0 flex items-end p-4 opacity-40">
              <div className="flex gap-2 text-background text-xs items-end font-mono">
                <FileImage className="" size={20} />
                <p>{"IMG_JIJI.PNG"}</p>
              </div>
            </div>
            <Image width={460} src={mainImageUrl} />
          </div>
        </div>
        <div className="col-span-7 flex flex-col">
          <div className="flex justify-between w-full rows-span-2">
            <div className="flex gap-4">
              <p className="font-bold underline">EN</p>
              <p>FIL</p>
            </div>
            <p>{phTime}</p>
          </div>
          <div className="grid grid-rows-2 items-start gap-2 mt-auto">
            <div className="">
              <GithubRecentCommitTile />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <p className="text-base">
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
