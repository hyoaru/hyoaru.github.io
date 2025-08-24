import CertificateCard from "@/components/features/certifications/card";
import { CertificateListModalContent } from "@/components/features/certifications/list-modal-content";
import { ErrorTile } from "@/components/ui/error-tile";
import { LoadingTile } from "@/components/ui/loading-tile";
import { useCore } from "@/hooks/use-core";
import { Button, Modal, useDisclosure } from "@heroui/react";

const optimizedImages: Record<string, string> = import.meta.glob(
  "../assets/portfolio-resources/assets/images/certifications/*.jpg",
  { eager: true, import: "default", query: "?format=webp&meta" },
);

export default function Certifications() {
  const { queryCertifications } = useCore();
  const certifications = queryCertifications();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  if (certifications.isLoading)
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

  if (certifications.error)
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
        <Button
          onPress={onOpen}
          className="group border-default bg-background w-max rounded-lg border px-3 py-1 font-mono text-sm uppercase opacity-80"
        >
          <p className="block group-hover:hidden">
            {"Certificate count: "} {certifications.data?.length}
          </p>
          <p className="hidden group-hover:block">View certificate list</p>
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {certifications.data?.map((certificate) => {
          const imageKey = Object.keys(optimizedImages).find((key) =>
            key.includes(certificate.image),
          )!;

          const image = optimizedImages[imageKey];

          return (
            <CertificateCard
              key={`CertificateCard-${certificate.title}`}
              {...certificate}
              image={image}
            />
          );
        })}
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <CertificateListModalContent />
      </Modal>
    </>
  );
}
