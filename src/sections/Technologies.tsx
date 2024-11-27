import { Modal, useDisclosure } from "@nextui-org/react";
import { TechnologyBadge } from "@/components/shared/TechnologyBadge";
import useCore from "@/hooks/useCore";
import { CornerLeftUp, Forward } from "lucide-react";
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
      <div className="h-[3rem] rounded-xl bg-background p-[3px]">
        <LoadingTile />
      </div>
    );

  if (error)
    return (
      <div className="h-[3rem] rounded-xl bg-background p-[3px]">
        <ErrorTile />
      </div>
    );

  return (
    <>
      <div className="relative overflow-x-hidden rounded-xl">
        <div className="absolute right-0 z-[5] flex h-full items-center bg-gradient-to-r from-transparent to-white px-6">
          <button onClick={onOpen} className="relative">
            <div className="absolute z-[-5] h-full w-full animate-ping rounded-full border border-primary bg-transparent backdrop-blur-xl"></div>
            <Forward className="z-[3] hidden rounded-full bg-primary p-1 text-primary-foreground lg:block" />
            <CornerLeftUp className="z-[3] block rounded-full bg-primary p-1 text-primary-foreground lg:hidden" />
          </button>
        </div>
        <div className="h-max rounded-xl bg-background p-[3px]">
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
