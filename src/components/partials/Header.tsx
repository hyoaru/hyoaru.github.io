import { Button } from "@/components/ui/Button";
import { PersonStanding, ArrowDownToLine } from "lucide-react";

export default function Header() {
  return (
    <div className="flex items-center rounded-xl bg-background p-[3px] text-sm sm:text-base lg:text-sm xl:text-base">
      <PersonStanding className="size-8 rounded-xl p-1" />
      <p className="me-auto font-bold">Cabrera, Jen Jade</p>
      <Button>
        Download
        <Button.Icon>
          <ArrowDownToLine />
        </Button.Icon>
      </Button>
    </div>
  );
}
