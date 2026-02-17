import { ResumeModal } from "@/features/identity";
import { Button, useOverlayState } from "@heroui/react";
import { ArrowUpRight, PersonStanding } from "lucide-react";
import { Ripple } from "m3-ripple";
import { AsyncBoundary, ThemeToggle } from "../../ui";

export const HeaderDesktop = () => {
  const modal = useOverlayState();
  return (
    <>
      <div className="lg:bg-background flex w-full items-center gap-1 rounded-xl sm:mb-4 lg:mb-0 lg:p-1">
        <div className="me-auto flex shrink-0 items-center gap-1">
          <PersonStanding className="" />
          <p className="font-bold">Cabrera, Jen Jade</p>
        </div>
        <div className="flex min-w-40 justify-end self-stretch">
          <AsyncBoundary
            classNames={{
              suspense: { spinner: "hidden" },
              errorBoundary: { icon: "hidden" },
            }}
          >
            <Button
              onClick={modal.open}
              size="sm"
              className="self-end rounded-lg"
            >
              <Ripple />
              <ArrowUpRight />
              View Resume
            </Button>
          </AsyncBoundary>
        </div>
        <div className="shrink-0">
          <ThemeToggle />
        </div>
      </div>

      <ResumeModal isOpen={modal.isOpen} onOpenChange={modal.setOpen} />
    </>
  );
};
