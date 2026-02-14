import { CareerCard } from "@/features/career";
import { Tabs } from "@heroui/react";
import { ChevronRight } from "lucide-react";
import { Ripple } from "m3-ripple";

export const MainPanel = () => {
  const tabs = [
    { id: "career-snapshot", label: "Career Snapshot" },
    { id: "certifications", label: " Certifications" },
    { id: "blogs", label: "War Journal" },
    { id: "projects", label: "Side Quests" },
    { id: "contact", label: "Get in Touch" },
  ];

  return (
    <Tabs hideSeparator className="w-full">
      <Tabs.ListContainer className="bg-default rounded-xl">
        <Tabs.List
          aria-label="Options"
          className="*:data-[selected=true]:text-background *:text-foreground w-max gap-1 rounded-xl *:w-max"
        >
          {tabs.map((tab) => (
            <Tabs.Tab
              key={tab.id}
              id={tab.id}
              className="bg-background button--sm button rounded-lg"
            >
              <Ripple />
              <ChevronRight />
              {tab.label}
              <Tabs.Indicator className="bg-accent rounded-lg" />
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs.ListContainer>

      <Tabs.Panel
        className="bg-default h-full rounded-xl p-1"
        id="career-snapshot"
      >
        <div className="bg-background pattern-dots h-full space-y-2.5 rounded-lg p-5">
          <p className="pb-2.5 text-xl">
            Thriving at the intersection of code, systems, and
            intelligence—integrating{" "}
            <span className="text-accent font-bold">fullstack engineering</span>
            , automated{" "}
            <span className="text-accent font-bold">cloud infrastructure</span>,
            and{" "}
            <span className="text-accent font-bold">data-driven insights</span>{" "}
            into a unified framework for high-performance,{" "}
            <span className="text-accent font-bold">architected systems</span>.
          </p>
          <CareerCard>
            <CareerCard.NextIndicator />
            <CareerCard.Content>
              <CareerCard.Title>[04]::Solutions Architect II</CareerCard.Title>
              <CareerCard.ContentHeader>
                <CareerCard.Date>April 2025 - Present</CareerCard.Date>
                <CareerCard.Location>
                  Philippine Digital Asset Exchange (PDAX) • On-site
                </CareerCard.Location>
              </CareerCard.ContentHeader>
              <CareerCard.ContentBody>
                <CareerCard.Description>
                  Architected serverless, event-driven security ecosystems to
                  automate infrastructure findings and operationalized squad
                  ownership. Focused on bridging the gap between cloud-scale
                  security ingestion and real-world developer remediation.
                </CareerCard.Description>
                <CareerCard.KeyAchievements>
                  <CareerCard.KeyAchievementsHeader />
                  <CareerCard.KeyAchievementsList>
                    <CareerCard.KeyAchievementsListItem>
                      Architected serverless, event-driven security ecosystems
                      to automate infrastructure findings and operationalized
                      squad ownership. Focused on bridging the gap between
                      cloud-scale security ingestion and real-world developer
                      remediation.{" "}
                    </CareerCard.KeyAchievementsListItem>
                    <CareerCard.KeyAchievementsListItem>
                      Architected serverless, event-driven security ecosystems
                      to automate infrastructure findings and operationalized
                      squad ownership. Focused on bridging the gap between
                      cloud-scale security ingestion and real-world developer
                      remediation.{" "}
                    </CareerCard.KeyAchievementsListItem>
                  </CareerCard.KeyAchievementsList>
                </CareerCard.KeyAchievements>
                <CareerCard.Technologies>
                  <CareerCard.TechnologiesHeader />
                  <CareerCard.TechnologiesList>
                    <CareerCard.TechnologyChip>
                      Amazon Web Services
                    </CareerCard.TechnologyChip>
                    <CareerCard.TechnologyChip>
                      AWS EC2
                    </CareerCard.TechnologyChip>
                    <CareerCard.TechnologyChip>
                      Containerization
                    </CareerCard.TechnologyChip>
                  </CareerCard.TechnologiesList>
                </CareerCard.Technologies>
              </CareerCard.ContentBody>
            </CareerCard.Content>
          </CareerCard>
        </div>
      </Tabs.Panel>
      <Tabs.Panel className="pt-4" id="analytics">
        <p>Track your metrics and analyze performance data.</p>
      </Tabs.Panel>
      <Tabs.Panel className="pt-4" id="reports">
        <p>Generate and download detailed reports.</p>
      </Tabs.Panel>
    </Tabs>
  );
};
