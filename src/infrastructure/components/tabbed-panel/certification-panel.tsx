import { useProfileActions } from "@/infrastructure/hooks/profile";
import { ScrollShadow } from "@heroui/react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { CertificationCard } from "./certification-card";

export const CertificationPanel = () => {
  const { getCertifications } = useProfileActions();
  const { data } = useSuspenseQuery(getCertifications());

  return (
    <div className="flex h-full min-h-0 flex-col space-y-2.5">
      <div className="h-fit shrink-0">
        <p className="pb-2.5 lg:text-xl">
          A collection of milestones and certifications from my{" "}
          <span className="text-accent font-bold">academic</span> and{" "}
          <span className="text-accent font-bold">professional</span>{" "}
          path—showcasing the{" "}
          <span className="text-accent font-bold">
            reflections of my dedication to continuous
          </span>{" "}
          learning that have contributed to my expertise and reputation in the
          field.
        </p>
      </div>

      <ScrollShadow hideScrollBar className="h-full min-h-0">
        <div className="grid grow grid-cols-1 gap-2.5 sm:grid-cols-2">
          {data.map((certification) => {
            return (
              <CertificationCard
                key={`certification-${certification.title}`}
                {...certification}
              />
            );
          })}
        </div>
      </ScrollShadow>
    </div>
  );
};
