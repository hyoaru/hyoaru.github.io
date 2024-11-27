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
      <div className="lg:bg-grid lg:absolute lg:inset-0 lg:flex lg:items-center lg:justify-center">
        <div className="block h-full w-full space-y-2 bg-custom-background p-2 sm:p-4 lg:flex lg:max-h-[1010px] lg:max-w-[1920px] lg:gap-4 lg:space-y-0 lg:rounded-xl">
          <div className="space-y-2 scroll-smooth rounded-xl lg:w-5/12 lg:overflow-y-auto lg:overflow-x-clip 2xl:w-4/12">
            <Header />
            <Main />
            <Technologies />
            <div className="grid h-[5rem] grid-cols-2 gap-1 rounded-xl bg-background p-[3px] sm:hidden lg:grid xl:hidden">
              <GithubRecentCommitTile />
              <LastFmRecentTrackTile />
            </div>
            <GithubStats />
            <GithubActivityCalendar />
            <div className="hidden lg:block">
              <Footer />
            </div>
          </div>
          <div className="scroll-smooth rounded-xl lg:w-7/12 lg:overflow-y-auto lg:overflow-x-clip 2xl:w-8/12">
            <div className="h-full space-y-2 rounded-xl lg:space-y-0">
              <Content />
              <div className="block pb-4 lg:hidden">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
