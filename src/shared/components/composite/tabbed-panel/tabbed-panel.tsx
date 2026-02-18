import { Tabs } from "@heroui/react";
import { ChevronRight } from "lucide-react";
import { Ripple } from "m3-ripple";
import { AsyncBoundary } from "../../ui";
import { CareerPanel } from "./career-panel";
import { CertificationPanel } from "./certification-panel";
import { ContactPanel } from "./contact-panel";

export const TabbedPanel = () => {
  const tabs = [
    {
      id: "career",
      label: "Career Snapshot",
      panel: CareerPanel,
    },
    {
      id: "certifications",
      label: " Certifications",
      panel: CertificationPanel,
    },
    {
      id: "contact",
      label: " Get in Touch",
      panel: ContactPanel,
    },
    // { id: "blogs", label: "War Journal" },
    // { id: "projects", label: "Side Quests" },
    // { id: "contact", label: "Get in Touch" },
  ];

  return (
    <Tabs hideSeparator className="h-full w-full">
      <Tabs.ListContainer className="bg-default h-fit shrink-0 rounded-xl">
        <Tabs.List
          aria-label="Options"
          className="*:data-[selected=true]:dark:text-foreground *:data-[selected=true]:text-background *:text-foreground w-max gap-1 rounded-xl *:w-max"
        >
          {tabs.map((tab) => (
            <Tabs.Tab
              key={`tab-${tab.id}`}
              id={tab.id}
              className="bg-background button--sm button rounded-lg text-xs sm:text-sm"
            >
              <Ripple />
              <ChevronRight />
              {tab.label}
              <Tabs.Indicator className="bg-accent rounded-lg" />
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs.ListContainer>

      {tabs.map((tab) => (
        <Tabs.Panel
          className="sm:bg-default h-[calc(100vh-8vh)] min-h-0 rounded-xl p-1 lg:h-full"
          key={`panel-${tab.id}`}
          id={tab.id}
        >
          <div className="bg-background pattern-dots h-full rounded-lg p-1 sm:p-5">
            <AsyncBoundary>
              <tab.panel />
            </AsyncBoundary>
          </div>
        </Tabs.Panel>
      ))}
    </Tabs>
  );
};
