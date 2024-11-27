import { Tab, Tabs } from "@nextui-org/react";
import { ChevronRight } from "lucide-react";
import React from "react";
import Projects from "./Projects";

export default function Content() {
  return (
    <>
      <div className="flex h-full flex-col space-y-2">
        <Tabs
          aria-label="Options"
          classNames={{
            tabList: " w-max sticky",
            base: "w-full bg-custom-secondary border-0 rounded-xl m-0 p-0",
            tab: "bg-background rounded-lg opacity-100 px-3 h-8",
            tabContent:
              "group-data-[selected=true]:text-primary-foreground text-sm 2xl:text-base text-foreground font-bold",
            cursor: "bg-primary",
            panel: "m-0 p-0 h-full overflow-y-hidden",
          }}
        >
          <Tab key="projects" title={<TabTitle title="Projects" />}>
            <TabContent>
              <Projects />
            </TabContent>
          </Tab>
          <Tab key="certifications" title={<TabTitle title="Certifications" />}>
            <TabContent>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                quibusdam maiores, repellendus optio illum, expedita quia
                aperiam quo quaerat possimus aliquid esse vel labore.
                Accusantium labore ipsa omnis illo consequuntur.
              </p>
            </TabContent>
          </Tab>
          <Tab key="contact" title={<TabTitle title="Contact" />}>
            <TabContent>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                quibusdam maiores, repellendus optio illum, expedita quia
                aperiam quo quaerat possimus aliquid esse vel labore.
                Accusantium labore ipsa omnis illo consequuntur.
              </p>
            </TabContent>
          </Tab>
        </Tabs>{" "}
      </div>
    </>
  );
}

function TabTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2">
      <p>{title}</p>
      <ChevronRight
        strokeWidth={4}
        className="rounded-full border p-[2px] font-bold"
      />
    </div>
  );
}

function TabContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full overflow-y-scroll rounded-xl sm:bg-custom-secondary sm:p-2">
      <div className="overflow-y-clip rounded-lg sm:bg-background sm:p-2">
        {children}
      </div>
    </div>
  );
}