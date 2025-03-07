import { ScrollShadow, Tab, Tabs } from "@nextui-org/react";
import { ChevronRight } from "lucide-react";
import React from "react";
import Projects from "./Projects";
import Certifications from "./Certifications";
import Contact from "./Contact";

export default function Content() {
  return (
    <>
      <div className="flex h-[90vh] flex-col space-y-2 overflow-y-scroll lg:h-full">
        <Tabs
          aria-label="Options"
          classNames={{
            tabList: " w-max m-[3px] p-0 dark:bg-background",
            base: "w-full bg-custom-secondary dark:bg-background border-0 rounded-xl m-0 p-0",
            tab: "bg-background rounded-lg opacity-100 px-3 h-8 dark:bg-custom-secondary  ",
            tabContent:
              "group-data-[selected=true]:text-primary-foreground dark:group-data-[selected=true]:text-primary-foreground  text-sm 2xl:text-base text-foreground font-bold",
            cursor: "bg-primary dark:bg-primary",
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
              <Certifications />
            </TabContent>
          </Tab>
          <Tab key="contact" title={<TabTitle title="Contact" />}>
            <TabContent>
              <Contact />
            </TabContent>
          </Tab>
        </Tabs>
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
    <div className="h-full rounded-xl sm:bg-custom-secondary">
      <ScrollShadow
        size={100}
        hideScrollBar
        className="h-full overflow-y-scroll sm:p-2"
      >
        <div className="overflow-y-clip rounded-lg sm:bg-background sm:p-2">
          {children}
        </div>
      </ScrollShadow>
    </div>
  );
}
