import { Button } from "@heroui/react";
import { ArrowUpRight, PersonStanding } from "lucide-react";
import { Ripple } from "m3-ripple";
import { ThemeToggle } from "../ui";

export const Header = () => {
  return (
    <>
      <div className="bg-background flex w-full items-center gap-1 rounded-xl sm:p-1">
        <PersonStanding className="" />
        <p className="me-auto font-bold">Cabrera, Jen Jade</p>
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
