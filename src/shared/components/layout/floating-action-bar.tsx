import { ResumeModal, SocialsModal } from "@/features/identity";
import { Button, toast, useOverlayState } from "@heroui/react";
import { BadgePlus, FileUser, Mail, Moon, Sun } from "lucide-react";
import { Ripple } from "m3-ripple";
import { useTheme } from "next-themes";

export const FloatingActionBar = () => {
  const { theme, setTheme } = useTheme();
  const resumeModal = useOverlayState();
  const socialsModal = useOverlayState();

  const emailAddress = "hello@jadecabrera.com";

  function handleCopy() {
    navigator.clipboard.writeText(emailAddress).then(() => {
      toast("Email address copied to clipboard!", {
        variant: "accent",
        actionProps: {
          children: "Dismiss",
          onPress: () => toast.clear(),
          variant: "tertiary",
        },
      });
    });
  }

  return (
    <>
      <div className="fixed inset-x-0 bottom-2 z-10 flex items-center justify-center sm:hidden">
        <div className="from-background/80 w-max overflow-hidden rounded-lg bg-gradient-to-t to-transparent backdrop-blur-md">
          <Button
            onClick={handleCopy}
            variant="tertiary"
            className="text-foreground rounded-none rounded-l-lg border-l-1 bg-transparent"
          >
            <Ripple />
            <Mail />
          </Button>
          <Button
            onClick={socialsModal.open}
            variant="tertiary"
            className="text-foreground rounded-none border-l-1 bg-transparent"
          >
            <Ripple />
            <BadgePlus />
          </Button>
          <Button
            variant="tertiary"
            onClick={resumeModal.open}
            className="text-foreground rounded-none border-x-1 bg-transparent"
          >
            <Ripple />
            <FileUser />
          </Button>
          <Button
            variant="tertiary"
            onPress={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-foreground rounded-none rounded-r-lg border-r-1 bg-transparent"
          >
            <Ripple />
            {theme === "light" ? <Sun /> : <Moon />}
          </Button>
        </div>
      </div>

      <ResumeModal
        isOpen={resumeModal.isOpen}
        onOpenChange={resumeModal.setOpen}
      />

      <SocialsModal
        isOpen={socialsModal.isOpen}
        onOpenChange={socialsModal.setOpen}
      />
    </>
  );
};
