import { Button } from "@heroui/react";
import { ArrowUpRight, PersonStanding } from "lucide-react";
import { ThemeToggle } from "../ui";

export const Header = () => {
  return (
    <div className="lg:bg-background flex w-full items-center gap-1 rounded-xl sm:mb-4 lg:mb-0 lg:p-1">
      <div className="me-auto flex shrink-0 items-center gap-1">
        <PersonStanding className="" />
        <p className="font-bold">Cabrera, Jen Jade</p>
      </div>
      <div className="flex min-w-40 justify-end self-stretch">
        <Button size="sm" className="self-end rounded-lg">
          <ArrowUpRight />
          View Resume
        </Button>
      </div>
      <div className="shrink-0">
        <ThemeToggle />
      </div>
    </div>
  );
};
