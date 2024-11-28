import {
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  ScrollShadow,
} from "@nextui-org/react";
import useCore from "@/hooks/useCore";
import ErrorTile from "../shared/ErrorTile";
import LoadingTile from "../shared/LoadingTile";

export default function CertificateListModalContent() {
  const { getCertifications } = useCore();
  const { data, isLoading, error } = getCertifications();

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
            <p>Certifications</p>
            <p className="text-base font-normal">
              {
                "A list of my certifications for every field over the course of my lifetime"
              }
            </p>
          </ModalHeader>
          <ModalBody>
            <ScrollShadow size={40} className="max-h-[400px]">
              <ol className="list-inside list-decimal">
                {data?.map((certification) => (
                  <li key={`Certification-${certification.title}`}>
                    {certification.title}
                  </li>
                ))}
              </ol>
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
