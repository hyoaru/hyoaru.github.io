import { SocialsModal } from "@/features/identity";
import { toast, Button, useOverlayState } from "@heroui/react";
import { Clipboard } from "lucide-react";

export const Footer = () => {
  const emailAddress = "hello@jadecabrera.com";
  const modal = useOverlayState();

  function onCopy() {
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
      <div className="bg-background flex justify-between rounded-xl p-1 text-sm">
        <div className="w-max-h-max relative">
          <Button
            size="sm"
            onPress={onCopy}
            variant="tertiary"
            className="gap-3 rounded-lg"
          >
            <Clipboard className="text-accent" />
            <p>{emailAddress}</p>
          </Button>
        </div>
        <Button
          onClick={modal.open}
          size="sm"
          className="gap-3 rounded-lg"
          variant="tertiary"
        >
          <p className="hidden sm:block">Connect with me</p>
          <p className="block sm:hidden">Connect</p>
          <div className="bg-success size-3 rounded-full"></div>
        </Button>
      </div>

      <SocialsModal isOpen={modal.isOpen} onOpenChange={modal.setOpen} />
    </>
  );
};
