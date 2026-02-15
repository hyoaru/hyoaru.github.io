import { AsyncBoundary } from "@/shared/components";
import TechnologyMarquee from "./technology-marquee";

export const Technologies = () => {
  return (
    <div className="relative h-14 overflow-x-hidden rounded-xl">
      <div className="from-background absolute left-0 z-[5] flex h-full items-center bg-gradient-to-r to-transparent px-10" />
      <div className="to-background absolute right-0 z-[5] flex h-full items-center bg-gradient-to-r from-transparent px-10" />
      <div className="bg-background h-full rounded-xl p-1">
        <AsyncBoundary>
          <TechnologyMarquee />
        </AsyncBoundary>
      </div>
    </div>
  );
};
