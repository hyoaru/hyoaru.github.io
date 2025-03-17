import { useDisclosure, Modal } from "@nextui-org/react";
import { Clipboard } from "lucide-react";
import SocialsModalContent from "../shared/SocialsModalContent";
import { toast } from "sonner";

export default function Footer() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const emailAddress = "hello@jadecabrera.com";

  function onCopy() {
    navigator.clipboard.writeText(emailAddress).then(() => {
      toast.success("Successfully copied to clipboard");
    });
  }

  return (
    <>
      <div className="flex justify-between rounded-xl bg-background p-[3px] text-xs sm:text-sm">
        <button
          onClick={onCopy}
          className="flex size-8 w-max items-center gap-1 rounded-lg border border-primary bg-primary/5 px-3 py-1"
        >
          <p className="">{emailAddress}</p>
          <Clipboard className="h-[1rem] w-[1rem]" />
        </button>
        <button
          onClick={onOpen}
          className="flex size-8 w-max items-center gap-2 rounded-lg border bg-custom-secondary px-3 py-1 transition-all duration-200 ease-in-out hover:bg-custom-secondary/40 dark:border-default"
        >
          <p className="hidden sm:block">Connect with me</p>
          <p className="block sm:hidden">Connect</p>
          <div className="size-3 animate-pulse rounded-full bg-success"></div>
        </button>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <SocialsModalContent />
      </Modal>
    </>
  );
}
