import Header from "@/components/partials/Header";
import GithubActivityCalendar from "@/sections/GithubActivityCalendar";
import GithubStats from "@/sections/GithubStats";
import Main from "@/sections/Main";
import Technologies from "@/sections/Technologies";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="bg-custom-background container-2xl">
      <div className="grid grid-cols-12 h-screen p-4 gap-4">
        <div className="col-span-4">
          <div className="flex flex-col gap-4">
            <Header />
            <Main />
            <Technologies />
            <GithubStats />
            <GithubActivityCalendar />
          </div>
          <div className=""></div>
        </div>
        <div className="col-span-8">
          <div className="h-full "></div>
        </div>
      </div>
    </div>
  );
}
