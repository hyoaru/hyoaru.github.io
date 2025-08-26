import { ExperienceCard } from "@/components/features/experiences/experience-card";
import { useCore } from "@/hooks/use-core";
import { TimeUtilities } from "@/utilities/time";
import dayjs from "dayjs";
import { useMemo } from "react";

export const Experiences = () => {
  const { queryExperiences } = useCore();
  const experiences = queryExperiences();

  const experienceDuration = useMemo(() => {
    if (!experiences?.data) return 0;

    const now = dayjs();

    const totalMonths = experiences.data.reduce((acc, exp) => {
      const start = dayjs(exp.startedAt);
      const end = exp.endedAt ? dayjs(exp.endedAt) : now;

      const months = Math.max(end.diff(start, "month"), 0);

      return acc + months;
    }, 0);

    const years = (totalMonths / 12).toFixed(1);
    return years;
  }, [experiences?.data]);

  return (
    <>
      <div className="" id="ContactSection">
        <div className="grid gap-2 sm:gap-4">
          <div className="bg-background space-y-2 rounded-xl sm:space-y-4">
            <div className="sticky top-0 p-[3px] sm:p-0">
              <div className="space-y-2 rounded-xl p-6 px-8">
                <p className="text-5xl font-bold">
                  {experiences.isLoading
                    ? "Calculating years of experience..."
                    : `Exactly ${experienceDuration} years of experience.`}
                </p>
                <p className="text-xs sm:text-base xl:text-sm 2xl:text-base">
                  A timeline of my professional journey, showcasing key roles,
                  projects, and the technologies that shaped my growth.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {experiences.data?.map((experience, index) => {
              const isMostRecent = experience === experiences.data?.[0];

              const experienceIndex = experiences?.data?.length - index;

              const parsedStartDate = TimeUtilities.parseMonthYearDate(
                experience.startedAt,
              );

              const parsedEndDate = experience.endedAt
                ? TimeUtilities.parseMonthYearDate(experience.endedAt)
                : "Present";

              return (
                <ExperienceCard key={`${index}-${experience.position}`}>
                  <ExperienceCard.OverflowIndex
                    classNames={{
                      overlay: `${isMostRecent && "animate-ping border-primary"}`,
                      text: `${isMostRecent && "bg-primary text-primary-foreground"}`,
                    }}
                  >
                    {experienceIndex}
                  </ExperienceCard.OverflowIndex>
                  <ExperienceCard.Body>
                    <ExperienceCard.Content>
                      <ExperienceCard.ContentHeader>
                        <ExperienceCard.Position>
                          {experience.position}
                        </ExperienceCard.Position>
                        <ExperienceCard.ContentSubHeader>
                          <ExperienceCard.Date>
                            {parsedStartDate} - {parsedEndDate}
                          </ExperienceCard.Date>
                          <ExperienceCard.CompanyModality>
                            {experience.company} {"•"} {experience.modality}
                          </ExperienceCard.CompanyModality>
                        </ExperienceCard.ContentSubHeader>
                      </ExperienceCard.ContentHeader>
                      <ExperienceCard.ContentBody>
                        <ExperienceCard.Summary>
                          {experience.summary}
                        </ExperienceCard.Summary>
                        <ExperienceCard.Highlights
                          highlights={experience.highlights}
                        />
                        <ExperienceCard.Technologies
                          technologies={experience.technologies}
                        />
                      </ExperienceCard.ContentBody>
                    </ExperienceCard.Content>
                  </ExperienceCard.Body>
                </ExperienceCard>
              );
            })}{" "}
          </div>
        </div>
      </div>
    </>
  );
};
