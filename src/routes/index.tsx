import Footer from "@/components/partials/Footer";
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
      <div className="grid grid-cols-12 h-screen p-4 gap-2">
        <div className="col-span-4">
          <div className="flex flex-col gap-2 h-full ">
            <Header />
            <Main />
            <div className="bg-background grow rounded-xl"></div>
            <Technologies />
            <GithubStats />
            <GithubActivityCalendar />
            <Footer />
          </div>
        </div>
        <div className="col-span-8">
          <div className="h-full bg-background"></div>
        </div>
      </div>
    </div>
  );
}
