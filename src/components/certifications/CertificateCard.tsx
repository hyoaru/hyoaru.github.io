import { Certification } from "@/types/core";
import {
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Image,
} from "@nextui-org/react";
import { Eye } from "lucide-react";

type CertificateCardProps = {
  certificate: Certification;
};

export default function CertificateCard({ certificate }: CertificateCardProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div
        onClick={onOpen}
        className="group relative h-full w-full cursor-pointer overflow-hidden rounded-xl border border-transparent transition-all duration-300 ease-in-out hover:border-primary"
      >
        <div className="absolute inset-0 z-[15] flex items-center justify-center text-primary opacity-0 transition-all duration-300 ease-in-out group-hover:animate-pulse group-hover:bg-primary/10 group-hover:opacity-100 group-hover:backdrop-blur-sm">
          <Eye size={80} />
        </div>

        <Image
          width={1000}
          src={certificate.imageShrinked}
          classNames={{
            wrapper: "h-full w-full object-cover ",
            img: "h-full w-full scale-105 object-cover object-center transition-all duration-300 ease-in-out group-hover:scale-110",
          }}
          alt=""
        />
      </div>

      <Modal size={"3xl"} isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>
                <div className="">
                  <p className="mb-6 text-2xl font-bold">{certificate.title}</p>
                  <div className="overflow-hidden rounded-xl">
                    <Image
                      isBlurred
                      width={1000}
                      src={certificate.imageOriginal}
                      classNames={{
                        wrapper: "h-full w-full",
                        img: "h-full w-full object-cover scale-105",
                      }}
                      alt=""
                    />
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {certificate.tags.map((tag) => (
                      <div
                        key={`CertificateTag-${certificate.title}-${tag}`}
                        className="rounded-lg border px-3 py-1 text-base"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
