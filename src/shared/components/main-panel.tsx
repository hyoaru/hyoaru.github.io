import { Tabs } from "@heroui/react";
import {
  Activity,
  Award,
  Calendar,
  ChevronRight,
  ChevronsDown,
  MapPin,
} from "lucide-react";
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
        <div className="bg-background pattern-dots h-full gap-2.5 rounded-lg p-5">
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
          <div className="bg-default/40 border-custom-background relative overflow-hidden rounded-lg border p-5 pb-7">
            <div className="bg-accent text-background absolute -right-1.5 -bottom-1.5 rounded-xl p-1.5">
              <ChevronsDown className="relative right-0.5 bottom-0.5" />
            </div>
            <div className="space-y-2.5">
              <p className="text-lg font-bold">[04]::Solutions Architect II</p>
              <div className="">
                <div className="text-muted flex items-center gap-2.5 text-sm">
                  <Calendar className="h-[1.2em] w-[1.2em]" />
                  April 2025 - Present
                </div>
                <div className="text-accent flex items-center gap-2.5 text-sm font-bold">
                  <MapPin className="h-[1.2em] w-[1.2em]" />
                  Philippine Digital Asset Exchange (PDAX) • On-site
                </div>
              </div>
              <div className="space-y-2.5">
                <p className="text-sm">
                  Architected serverless, event-driven security ecosystems to
                  automate infrastructure findings and operationalized squad
                  ownership. Focused on bridging the gap between cloud-scale
                  security ingestion and real-world developer remediation.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5 text-sm font-bold">
                    <Award className="h-[1.2em] w-[1.2em]" />
                    Key Achievements
                  </div>
                  <ul className="text-muted list-disc ps-8 text-sm">
                    <li>
                      Architected serverless, event-driven security ecosystems
                      to automate infrastructure findings and operationalized
                      squad ownership. Focused on bridging the gap between
                      cloud-scale security ingestion and real-world developer
                      remediation.{" "}
                    </li>
                    <li>
                      Architected serverless, event-driven security ecosystems
                      to automate infrastructure findings and operationalized
                      squad ownership. Focused on bridging the gap between
                      cloud-scale security ingestion and real-world developer
                      remediation.{" "}
                    </li>
                  </ul>
                  <div className="flex items-center gap-2.5">
                    <div className="flex items-center gap-2.5 text-sm font-bold">
                      <Activity className="h-[1.2em] w-[1.2em]" />
                      Technologies
                    </div>
                    <div className="bg-custom-background h-full rounded-sm px-1 py-0.5 text-[0.6rem]">
                      Amazon Web Services
                    </div>

                    <div className="bg-custom-background h-full rounded-sm px-1 py-0.5 text-[0.6rem]">
                      AWS EC2
                    </div>
                    <div className="bg-custom-background h-full rounded-sm px-1 py-0.5 text-[0.6rem]">
                      Containerization
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
