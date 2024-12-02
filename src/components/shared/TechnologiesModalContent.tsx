import {
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  ScrollShadow,
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
              <span>{"A total of "}</span>
              <span className="p-1 text-xl font-bold text-primary">
                {data?.length ?? "n"}
              </span>
              <span>
                {
                  " languages and technologies that I work and used to work with"
                }
              </span>
            </p>
          </ModalHeader>
          <ModalBody>
            <ScrollShadow size={40} className="max-h-[400px]">
              <div className="flex flex-wrap gap-2">
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
            </ScrollShadow>
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
