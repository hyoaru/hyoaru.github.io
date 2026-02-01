import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@heroui/react";
import { ArrowUpRight, PersonStanding } from "lucide-react";
import { Ripple } from "m3-ripple";

export const Header = () => {
  return (
    <>
      <div className="bg-background flex items-center gap-1 rounded-xl p-1">
        <PersonStanding className="ps-1" />
        <p className="me-auto font-bold">Cabrera, Jen Jade</p>
        <Button size="sm" className="rounded-lg">
          <Ripple />
          <ArrowUpRight />
          Resume
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
