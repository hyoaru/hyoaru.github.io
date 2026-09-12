import { Tabs } from "@heroui/react";
import { getRouteApi } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import type { ComponentType } from "react";
import { CareerPanel } from "../../profile/career-panel";
import { CertificationPanel } from "../../profile/certification-panel";
import { ContactPanel } from "../../profile/contact-panel";
import { ProjectPanel } from "../../profile/project-panel";
import { AsyncBoundary } from "../async-boundary";
import type { TabId } from "./tabs";

const routeApi = getRouteApi("/");

type TabConfig = {
  id: TabId;
  label: string;
  panel: ComponentType;
};

export const TabbedPanel = () => {
  const { tab } = routeApi.useSearch();
  const navigate = routeApi.useNavigate();

  const tabs: TabConfig[] = [
    {
      id: "career",
      label: "Career Snapshot",
      panel: CareerPanel,
    },
    {
      id: "certifications",
      label: "Certifications",
      panel: CertificationPanel,
    },
    {
      id: "projects",
      label: "Projects",
      panel: ProjectPanel,
    },
    {
      id: "contact",
      label: "Get in Touch",
      panel: ContactPanel,
    },
  ];

  return (
    <Tabs
      className="h-full w-full"
      selectedKey={tab}
      onSelectionChange={(key) => {
        if (typeof key !== "string") return;

        navigate({
          search: (prev) => ({ ...prev, tab: key as TabId }),
          replace: true,
        });
      }}
    >
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
              <ChevronRight />
              {tab.label}
              <Tabs.Indicator className="bg-accent rounded-lg" />
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs.ListContainer>

      {tabs.map((tab) => (
        <Tabs.Panel
          className="sm:bg-default h-[92vh] min-h-0 rounded-xl p-1 lg:h-full"
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
