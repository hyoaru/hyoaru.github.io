import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { TechnologyBadge } from "@/components/shared/TechnologyBadge";
import useCore from "@/hooks/useCore";
import { Forward } from "lucide-react";
import Marquee from "react-fast-marquee";

export default function Technologies() {
  const { getTechnologies } = useCore();
  const { data } = getTechnologies();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="relative">
        <div className="absolute z-[5] right-[-6px] top-[-6px]">
          <button onClick={onOpen}>
            <Forward className="bg-primary p-1 rounded-full text-primary-foreground" />
          </button>
        </div>
        <div className="bg-background rounded-xl p-[3px]">
          <Marquee>
            {data?.map((technology) => (
              <TechnologyBadge
                className="mx-[3px]"
                key={`TechnologyBadge-${technology.name}`}
              >
                <TechnologyBadge.Logo logo={technology.logo} />
                {technology.name}
              </TechnologyBadge>
            ))}
          </Marquee>
        </div>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <p>Technologies</p>
                <p className="text-base font-normal">
                  {
                    "A list of languages and tecnologies that I work and used to work with"
                  }
                </p>
              </ModalHeader>
              <ModalBody>
                <div className="relative">
                  <div className="h-[413px] overflow-y-scroll ">
                    <div className="flex gap-2 flex-wrap">
                      {data?.map((technology) => (
                        <TechnologyBadge
                          className="text-sm"
                          key={`TechnologyBadgeModal-${technology.name}`}
                        >
                          <TechnologyBadge.Logo logo={technology.logo} />
                          {technology.name}
                        </TechnologyBadge>
                      ))}
                    </div>
                  </div>
                  <div className="absolute w-full bottom-0 bg-gradient-to-t from-black/20 dark:from-main-accent/50 to-transparent h-1/4 rounded-xl pointer-events-none" />
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
