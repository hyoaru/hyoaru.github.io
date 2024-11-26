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
      <div className="h-14 bg-background p-[3px] rounded-xl">
        <LoadingTile />
      </div>
    );

  if (error)
    return (
      <div className="h-14 bg-background p-[3px] rounded-xl">
        <ErrorTile />
      </div>
    );

  return (
    <>
      <div className="relative">
        <div className="absolute z-[5] right-[-6px] top-[-6px]">
          <button onClick={onOpen} className="relative">
            <div className=" rounded-full border border-primary absolute w-full h-full animate-ping"></div>
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
        <TechnologiesModalContent />
      </Modal>
    </>
  );
}
