import CertificateCard from "@/components/certifications/CertificateCard";
import CertificateListModalContent from "@/components/certifications/CertificateListModalContent";
import ErrorTile from "@/components/shared/ErrorTile";
import LoadingTile from "@/components/shared/LoadingTile";
import useCore from "@/hooks/useCore";
import { Modal, useDisclosure } from "@nextui-org/react";

export default function Certifications() {
  const { getCertifications } = useCore();
  const { data, isLoading, error } = getCertifications();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  if (isLoading)
    return (
      <>
        <div className="grid grid-cols-2 gap-4">
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <LoadingTile
                key={`CertificationCardLoadingComponent-${index}`}
                className="h-[400px] rounded-xl"
              />
            ))}
        </div>
      </>
    );

  if (error)
    return (
      <>
        <div className="grid grid-cols-2 gap-4">
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <ErrorTile
                key={`CertificationCardErrorComponent-${index}`}
                className="h-[400px] rounded-xl"
              />
            ))}
        </div>
      </>
    );

  return (
    <>
      <div className="sticky top-0 z-20 flex w-full justify-end p-2">
        <button
          onClick={onOpen}
          className="group w-max rounded-lg border border-default bg-background px-3 py-1 font-mono text-sm uppercase opacity-80 transition-all duration-300 ease-in-out hover:scale-105"
        >
          <p className="block group-hover:hidden">
            {"Certificate count: "} {data?.length}
          </p>
          <p className="hidden group-hover:block">View certificate list</p>
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {data?.map((certificate) => (
          <CertificateCard
            key={`CertificateCard-${certificate.title}`}
            certificate={certificate}
          />
        ))}
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <CertificateListModalContent />
      </Modal>
    </>
  );
}
