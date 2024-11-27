import CertificateCard from "@/components/certifications/CertificateCard";
import ErrorTile from "@/components/shared/ErrorTile";
import LoadingTile from "@/components/shared/LoadingTile";
import useCore from "@/hooks/useCore";

export default function Certifications() {
  const { getCertifications } = useCore();
  const { data, isLoading, error } = getCertifications();

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
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {data?.map((certificate) => (
          <CertificateCard
            key={`CertificateCard-${certificate.title}`}
            certificate={certificate}
          />
        ))}
      </div>
    </>
  );
}
