import GithubRecentCommitTile from "@/components/github/GithubRecentCommitTile";
import LastFmRecentTrackTile from "@/components/last-fm/LastFmRecentTrackTile";
import Footer from "@/components/partials/Footer";
import Header from "@/components/partials/Header";
import Content from "@/sections/Content";
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
    <>
      <div className="bg-grid absolute inset-0 flex items-center justify-center">
        <div className="block h-full w-full gap-4 rounded-xl bg-custom-background p-4 lg:flex lg:max-h-[1010px] lg:max-w-[1920px]">
          <div className="space-y-2 overflow-y-auto overflow-x-clip scroll-smooth rounded-xl lg:w-5/12 2xl:w-4/12">
            <Header />
            <Main />
            <Technologies />
            <div className="grid h-[5rem] grid-cols-2 gap-1 rounded-xl bg-background p-[3px] sm:hidden lg:grid xl:hidden">
              <GithubRecentCommitTile />
              <LastFmRecentTrackTile />
            </div>
            <GithubStats />
            <GithubActivityCalendar />
            <div className="hidden sm:block">
              <Footer />
            </div>
          </div>
          <div className="overflow-y-auto overflow-x-clip scroll-smooth rounded-xl lg:w-7/12 2xl:w-8/12">
            <div className="h-full rounded-xl">
              <Content />
              <div className="block sm:hidden">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
