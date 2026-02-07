import { Header } from "@/core";
import { GitActivity, GitStats } from "@/features/git";
import { Profile, RecentJob } from "@/features/profile";
import { Technologies } from "@/features/technologies";
import { ScrollShadow } from "@heroui/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="bg-dots absolute flex h-full w-full items-center justify-center">
      <div className="bg-custom-background mx-auto h-full max-h-[1080px] w-full max-w-[1920px] rounded-xl p-5">
        <div className="flex h-full w-full gap-5">
          <ScrollShadow hideScrollBar className="w-[38%] shrink-0 space-y-2.5">
            <Header />
            <Profile />
            <RecentJob />
            <Technologies />
            <GitStats />
            <GitActivity />
          </ScrollShadow>
          <div className="h-fit w-full"></div>
        </div>
      </div>
    </div>
  );
}
