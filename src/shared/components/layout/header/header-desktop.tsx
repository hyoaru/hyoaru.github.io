import { Button } from "@heroui/react";
import { ArrowUpRight, PersonStanding } from "lucide-react";
import { Ripple } from "m3-ripple";
import { ThemeToggle } from "../../ui";

export const HeaderDesktop = () => {
  return (
    <>
      <div className="lg:bg-background flex w-full items-center gap-1 rounded-xl sm:mb-4 lg:mb-0 lg:p-1">
        <div className="me-auto flex items-center gap-1">
          <PersonStanding className="" />
          <p className="font-bold">Cabrera, Jen Jade</p>
        </div>
        <Button size="sm" className="rounded-lg">
          <Ripple />
          <ArrowUpRight />
          View Resume
        </Button>
        <div className="flex gap-1">
          <ThemeToggle />
        </div>
      </div>
      {/* <Modal size="5xl" isOpen={isOpen} onOpenChange={onOpenChange}> */}
      {/*   <ResumeViewModalContent /> */}
      {/* </Modal> */}
    </>
  );
};
