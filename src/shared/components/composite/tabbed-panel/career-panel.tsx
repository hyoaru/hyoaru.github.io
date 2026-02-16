import { careerApi, CareerCard } from "@/features/career";
import { Datetime } from "@/shared/utilities";
import { ScrollShadow } from "@heroui/react";
import { useSuspenseQuery } from "@tanstack/react-query";

export const CareerPanel = () => {
  const { data: experiences } = useSuspenseQuery(careerApi.query.experiences());

  return (
    <div className="flex h-full min-h-0 flex-col space-y-2.5">
      <div className="h-fit shrink-0">
        <p className="pb-2.5 text-xl">
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

      <ScrollShadow hideScrollBar className="h-full min-h-0">
        <div className="flex flex-grow flex-col gap-y-2.5">
          {experiences.reverse().map((experience, index) => {
            index = experiences.length - 1 - index;
            const startedAt = Datetime.extractMonthYear(experience.startedAt);

            const endedAt = experience.endedAt
              ? Datetime.extractMonthYear(experience.endedAt)
              : "Present";

            return (
              <CareerCard key={`${index}-${experience.title}`}>
                <CareerCard.NextIndicator />
                <CareerCard.Content>
                  <CareerCard.Title>
                    [0{index + 1}]::{experience.title}
                  </CareerCard.Title>
                  <CareerCard.ContentHeader>
                    <CareerCard.Date>
                      {startedAt} - {endedAt}
                    </CareerCard.Date>
                    <CareerCard.Location>
                      {experience.organization}
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
