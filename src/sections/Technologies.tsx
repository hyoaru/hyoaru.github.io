import { Modal, useDisclosure } from "@nextui-org/react";
import { TechnologyBadge } from "@/components/shared/TechnologyBadge";
import useCore from "@/hooks/useCore";
import { Forward } from "lucide-react";
import Marquee from "react-fast-marquee";
import LoadingTile from "@/components/shared/LoadingTile";
import ErrorTile from "@/components/shared/ErrorTile";
import TechnologiesModalContent from "@/components/shared/TechnologiesModalContent";

export default function Technologies() {
  const { getTechnologies } = useCore();
  const { data, isLoading, error } = getTechnologies();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  if (isLoading)
    return (
      <div className="h-[3rem] bg-background p-[3px] rounded-xl">
        <LoadingTile />
      </div>
    );

  if (error)
    return (
      <div className="h-[3rem] bg-background p-[3px] rounded-xl">
        <ErrorTile />
      </div>
    );

  return (
    <>
      <div className="relative overflow-x-hidden rounded-xl">
        <div className="absolute z-[5] flex items-center h-full right-0 px-6 bg-gradient-to-r from-transparent to-white">
          <button onClick={onOpen} className="relative">
            <div className=" rounded-full border border-primary absolute w-full h-full animate-ping bg-transparent backdrop-blur-xl z-[-5]"></div>
            <Forward className="bg-primary p-1 rounded-full text-primary-foreground z-[3]" />
          </button>
        </div>
        <div className="bg-background rounded-xl p-[3px] h-max">
          <Marquee>
            {data?.map((technology) => (
              <TechnologyBadge
                className="mx-[3px] h-[2.6rem]"
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
        <TechnologiesModalContent />
      </Modal>
    </>
  );
}
