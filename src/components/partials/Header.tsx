import { useThemeContext } from "@/context/ThemeContext";
import { Button, cn, Modal, useDisclosure } from "@nextui-org/react";
import { PersonStanding, Moon, FileUser, Sun } from "lucide-react";
import ResumeViewModalContent from "../shared/ResumeViewModalContent";

export default function Header() {
  const { toggleTheme, theme } = useThemeContext();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="relative flex items-center rounded-xl bg-background p-[3px] text-sm sm:text-base lg:text-sm xl:text-base">
        <PersonStanding className="size-8 rounded-xl p-1" />
        <p className="me-auto font-bold">Cabrera, Jen Jade</p>

        <div className="flex gap-1">
          <Button
            onClick={onOpen}
            isIconOnly
            className={cn(
              "flex h-8 rounded-lg text-sm font-bold sm:hidden sm:text-base lg:text-sm 2xl:gap-4 2xl:text-base",
              theme === "light"
                ? "bg-custom-secondary"
                : "bg-primary text-primary-foreground",
            )}
          >
            <FileUser />
          </Button>
          <Button
            onPress={onOpen}
            className={cn(
              "hidden h-8 rounded-lg bg-custom-secondary text-sm font-bold sm:flex sm:text-base lg:text-sm 2xl:gap-4 2xl:text-base",
            )}
          >
            View resume
          </Button>
          <Button
            onPress={toggleTheme}
            isIconOnly
            className={cn(
              "flex h-8 rounded-lg bg-custom-secondary text-sm font-bold text-primary sm:text-base lg:text-sm 2xl:gap-4 2xl:text-base",
            )}
          >
            {theme === "light" ? <Sun /> : <Moon className="" />}
          </Button>
        </div>
      </div>
      <Modal size={"5xl"} isOpen={isOpen} onOpenChange={onOpenChange}>
        <ResumeViewModalContent />
      </Modal>
    </>
  );
}
