import { GitActivity, GitStats } from "@/features/git";
import { RecentJob, Technologies } from "@/features/identity";
import {
  Filler,
  FloatingActionBar,
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
      <div className="lg:bg-custom-background mx-auto h-full max-h-[1080px] w-full max-w-[1920px] rounded-xl bg-transparent p-2 sm:p-4">
        <div className="flex h-full w-full flex-col gap-5 lg:flex-row">
          <ScrollShadow
            hideScrollBar
            className="relative w-full shrink-0 space-y-2.5 p-2 sm:p-0 lg:w-[40%]"
          >
            <FloatingActionBar />
            <Header />
            <Profile />
            <RecentJob />
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
  );
}
