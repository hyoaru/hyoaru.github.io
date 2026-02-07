import { Header } from "@/core";
import { GitActivity, GitStats } from "@/features/git";
import { Profile, RecentJob } from "@/features/profile";
import { Technologies } from "@/features/technologies";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="mx-auto max-w-[1680px] p-5">
      <div className="flex gap-5">
        <div className="h-fit w-[38%] shrink-0 space-y-2.5">
          <Header />
          <Profile />
          <RecentJob />
          <Technologies />
          <GitStats />
          <GitActivity />
        </div>
        <div className="h-fit w-full"></div>
      </div>
    </div>
  );
}
