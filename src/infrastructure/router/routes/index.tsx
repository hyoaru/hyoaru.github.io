import { GitActivity, GitStats } from "@/infrastructure/components/git";
import {
  Profile,
  RecentExperience,
  Technologies,
} from "@/infrastructure/components/profile";
import { Filler, TAB_IDS, TabbedPanel } from "@/infrastructure/components/ui";
import { ScrollShadow } from "@heroui/react";
import { createFileRoute, stripSearchParams } from "@tanstack/react-router";
import { z } from "zod";
import { FloatingActionBar, Footer, Header } from "../../components/layout";

const tabSearchSchema = z.object({
  tab: z.enum(TAB_IDS).catch(TAB_IDS[0]),
});

export const Route = createFileRoute("/")({
  validateSearch: tabSearchSchema,
  search: {
    middlewares: [stripSearchParams({ tab: "career" })],
  },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className="pattern-dots absolute flex h-full w-full items-center justify-center">
        <div className="lg:bg-custom-background mx-auto h-full max-h-[1080px] w-full max-w-[1920px] rounded-xl bg-transparent p-2 sm:p-4">
          <div className="flex h-full w-full flex-col gap-5 lg:flex-row">
            <ScrollShadow
              hideScrollBar
              className="relative w-full shrink-0 space-y-2.5 p-2 sm:p-0 lg:w-[40%]"
            >
              <FloatingActionBar />
              <Header />
              <Profile />
              <RecentExperience />
              <Technologies />
              <div className="hidden sm:block">
                <GitStats />
              </div>
              <GitActivity />
              <div className="hidden lg:block">
                <Filler className="h-14" />
              </div>
              <div className="hidden lg:block">
                <Footer />
              </div>
            </ScrollShadow>
            <TabbedPanel />
            <div className="lg:hidden">
              <Filler className="h-8 shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
