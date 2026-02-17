import { GitActivity, GitStats } from "@/features/git";
import { RecentJob, Technologies } from "@/features/identity";
import {
  Filler,
  Footer,
  Header,
  Profile,
  TabbedPanel,
} from "@/shared/components";
import { ScrollShadow } from "@heroui/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="pattern-dots absolute flex h-full w-full items-center justify-center">
      <div className="lg:bg-custom-background mx-auto h-full max-h-[1080px] w-full max-w-[1920px] rounded-xl bg-transparent p-2 sm:p-2">
        <div className="flex h-full w-full flex-col gap-5 lg:flex-row">
          <ScrollShadow
            hideScrollBar
            className="w-full shrink-0 space-y-2.5 p-2 lg:w-[40%] lg:p-0"
          >
            <Header />
            <Profile />
            <RecentJob />
            <Technologies />
            <div className="hidden sm:block">
              <GitStats />
            </div>
            <GitActivity />
            <Filler className="h-14" />
            <Footer />
          </ScrollShadow>
          <TabbedPanel />
        </div>
      </div>
    </div>
  );
}
