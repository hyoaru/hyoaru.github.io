import { AsyncBoundary } from "@/shared/components";
import { Button, useOverlayState } from "@heroui/react";
import { ArrowUpRight } from "lucide-react";
import { Ripple } from "m3-ripple";
import TechnologyMarquee from "./technology-marquee";
import { TechnologyModal } from "./technology-modal";

export const Technologies = () => {
  const modal = useOverlayState();
  return (
    <>
      <div className="xs:h-14 relative h-12 overflow-x-hidden rounded-xl">
        <div className="absolute inset-0 z-[8] flex items-center justify-end pe-4">
          <Button
            onClick={modal.open}
            isIconOnly
            size="sm"
            className="relative size-7 rounded-full sm:size-8"
          >
            <div className="absolute inset-0 m-auto animate-ping rounded-full border"></div>
            <Ripple />
            <ArrowUpRight />
          </Button>
        </div>
        <div className="from-background absolute left-0 z-[5] flex h-full items-center bg-gradient-to-r to-transparent px-10" />
        <div className="to-background absolute right-0 z-[5] flex h-full items-center bg-gradient-to-r from-transparent px-10" />
        <div className="bg-background h-full rounded-xl p-1">
          <AsyncBoundary>
            <TechnologyMarquee />
          </AsyncBoundary>
        </div>
      </div>
      <TechnologyModal isOpen={modal.isOpen} onOpenChange={modal.setOpen} />
    </>
  );
};
