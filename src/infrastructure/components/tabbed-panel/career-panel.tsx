import { useProfileActions } from "@/infrastructure/hooks/profile";
import { TimestampToMonthYear } from "@/infrastructure/formatters";
import { ScrollShadow } from "@heroui/react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { CareerCard } from "./career-card";

export const CareerPanel = () => {
  const { getCareerHistory } = useProfileActions();
  const { data } = useSuspenseQuery(getCareerHistory());
  const careerHistory = [...data].reverse();

  return (
    <div className="flex h-full min-h-0 flex-col space-y-2.5">
      <div className="h-fit shrink-0">
        <p className="pb-2.5 sm:text-xl">
          Thriving at the intersection of code, systems, and
          intelligence—integrating{" "}
          <span className="text-accent font-bold">fullstack engineering</span>,
          automated{" "}
          <span className="text-accent font-bold">cloud infrastructure</span>,
          and{" "}
          <span className="text-accent font-bold">data-driven insights</span>{" "}
          into a unified framework for high-performance,{" "}
          <span className="text-accent font-bold">architected systems</span>.
        </p>
      </div>

      <ScrollShadow hideScrollBar className="h-full min-h-0 lg:pb-0">
        <div className="flex flex-grow flex-col gap-y-2.5">
          {careerHistory.map((experience, index) => {
            index = data.length - 1 - index;
            const startedAt = new TimestampToMonthYear(
              experience.startedAt,
            ).format();

            const endedAt = experience.endedAt
              ? new TimestampToMonthYear(experience.endedAt).format()
              : "Present";

            return (
              <CareerCard key={`${index}-${experience.title}`}>
                <CareerCard.NextIndicator />
                <CareerCard.Content>
                  <CareerCard.Title>
                    [
                    {index == data.length - 1 ? (
                      <>
                        {" "}
                        <span className="bg-success relative inline-block size-2 rounded-full align-middle">
                          <span className="border-success absolute inset-0 m-auto animate-ping rounded-full border"></span>
                        </span>{" "}
                      </>
                    ) : (
                      <>0{index + 1}</>
                    )}
                    ]::{experience.title}
                  </CareerCard.Title>
                  <CareerCard.ContentHeader>
                    <CareerCard.Date>
                      {startedAt} - {endedAt}
                    </CareerCard.Date>
                    <CareerCard.Location>
                      {experience.organization} · {experience.country}
                    </CareerCard.Location>
                  </CareerCard.ContentHeader>
                  <CareerCard.ContentBody>
                    <CareerCard.Description>
                      {experience.summary}
                    </CareerCard.Description>
                    <CareerCard.KeyAchievements>
                      <CareerCard.KeyAchievementsHeader />
                      <CareerCard.KeyAchievementsList>
                        {experience.highlights.map((highlight) => (
                          <CareerCard.KeyAchievementsListItem
                            key={`${experience.title}-${highlight}`}
                          >
                            {highlight}
                          </CareerCard.KeyAchievementsListItem>
                        ))}
                      </CareerCard.KeyAchievementsList>
                    </CareerCard.KeyAchievements>
                    <CareerCard.Technologies>
                      <CareerCard.TechnologiesHeader />
                      <CareerCard.TechnologiesList>
                        {experience.technologies.map((technology) => (
                          <CareerCard.TechnologyChip
                            key={`${experience.title}-${technology}`}
                          >
                            {technology}
                          </CareerCard.TechnologyChip>
                        ))}
                      </CareerCard.TechnologiesList>
                    </CareerCard.Technologies>
                  </CareerCard.ContentBody>
                </CareerCard.Content>
              </CareerCard>
            );
          })}
        </div>
      </ScrollShadow>
    </div>
  );
};
