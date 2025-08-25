import { ExperienceCard } from "@/components/features/experiences/experience-card";
import { useCore } from "@/hooks/use-core";
import { ArrowUpLeft } from "lucide-react";
import { TimeUtilities } from "@/utilities/time";

export const Experiences = () => {
  const { queryExperiences } = useCore();
  const experiences = queryExperiences();

  return (
    <>
      <div className="" id="ContactSection">
        <div className="grid gap-2 sm:gap-4">
          <div className="bg-background space-y-2 rounded-xl sm:space-y-4">
            <div className="sticky top-0 p-[3px] sm:p-0">
              <div className="space-y-2 rounded-xl p-6 px-8">
                <p className="text-5xl font-bold">Work experience.</p>
                <p className="text-xs sm:text-base xl:text-sm 2xl:text-base">
                  A timeline of my professional journey, showcasing key roles,
                  projects, and the technologies that shaped my growth.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {experiences.data?.map((experience) => {
              const isMostRecent = experience === experiences.data?.[0];

              const parsedStartDate = TimeUtilities.parseMonthYearDate(
                experience.startedAt,
              );

              const parsedEndDate = experience.endedAt
                ? TimeUtilities.parseMonthYearDate(experience.endedAt)
                : "Present";

              return (
                <ExperienceCard isMostRecent={isMostRecent}>
                  {!isMostRecent && (
                    <ExperienceCard.OverflowIcon>
                      <ArrowUpLeft size={30} />
                    </ExperienceCard.OverflowIcon>
                  )}
                  <ExperienceCard.Body>
                    <ExperienceCard.Content>
                      <ExperienceCard.ContentHeader>
                        <ExperienceCard.Position>
                          {experience.position}
                        </ExperienceCard.Position>
                        <ExperienceCard.ContentSubHeader>
                          <ExperienceCard.Company>
                            {experience.company}
                          </ExperienceCard.Company>
                          <ExperienceCard.Location>
                            {experience.country ?? experience.modality}
                          </ExperienceCard.Location>
                        </ExperienceCard.ContentSubHeader>
                      </ExperienceCard.ContentHeader>
                      <ExperienceCard.ContentBody>
                        <ExperienceCard.Date>
                          {parsedStartDate} - {parsedEndDate}
                        </ExperienceCard.Date>
                        <ExperienceCard.Highlights
                          highlights={experience.highlights}
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
