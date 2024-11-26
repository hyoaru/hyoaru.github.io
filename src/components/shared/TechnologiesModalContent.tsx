import {
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { TechnologyBadge } from "./TechnologyBadge";
import useCore from "@/hooks/useCore";
import ErrorTile from "./ErrorTile";
import LoadingTile from "./LoadingTile";

export default function TechnologiesModalContent() {
  const { getTechnologies } = useCore();
  const { data, isLoading, error } = getTechnologies();

  if (isLoading)
    return (
      <ModalContent className="p-1">
        <LoadingTile className="h-[50vh]" />
      </ModalContent>
    );

  if (error)
    return (
      <ModalContent className="p-1">
        <ErrorTile className="h-[50vh]" />
      </ModalContent>
    );

  return (
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
  );
}
