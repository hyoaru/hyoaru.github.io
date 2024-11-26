import { useDisclosure, Modal } from "@nextui-org/react";
import { Clipboard } from "lucide-react";
import SocialsModalContent from "../shared/SocialsModalContent";

export default function Footer() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="rounded-xl bg-white p-3 flex justify-between">
        <div className="flex gap-1 items-center px-3 py-1 rounded-lg border bg-primary/5 text-sm border-primary">
          <p className="">{"jjcabreraaaa@gmail.com"}</p>
          <Clipboard className="h-[1rem] w-[1rem]" />
        </div>
        <button
          onClick={onOpen}
          className="flex gap-2 items-center bg-custom-secondary px-3 py-1 rounded-lg border hover:bg-custom-secondary/40 transition-all duration-200 ease-in-out"
        >
          <p className="text-sm">Connect with me</p>
          <div className="size-3 bg-success rounded-full animate-pulse"></div>
        </button>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <SocialsModalContent />
      </Modal>
    </>
  );
}
