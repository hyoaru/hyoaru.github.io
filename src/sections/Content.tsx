import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { ChevronRight } from "lucide-react";
import React from "react";

export default function Content() {
  return (
    <>
      <div className="flex flex-col space-y-2 h-full">
        <Tabs
          aria-label="Options"
          classNames={{
            tabList: " w-max",
            base: "w-full bg-background border-0 rounded-xl m-0 p-0",
            tab: "bg-background rounded-lg opacity-100 px-3 h-8",
            tabContent:
              "group-data-[selected=true]:text-primary-foreground text-base text-foreground font-bold",
            cursor: "bg-primary",
            panel: "m-0 p-0 h-full",
          }}
        >
          <Tab key="projects" title={<TabTitle title="Projects" />}>
            <TabContent>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                quibusdam maiores, repellendus optio illum, expedita quia
                aperiam quo quaerat possimus aliquid esse vel labore.
                Accusantium labore ipsa omnis illo consequuntur.
              </p>
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
        className="border p-[2px] rounded-full font-bold"
      />
    </div>
  );
}

function TabContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full bg-custom-secondary rounded-xl p-4">{children}</div>
  );
}
