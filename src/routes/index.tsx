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
    <>
      <div className="flex items-center justify-center absolute bg-grid inset-0">
        <div className="flex h-full w-full rounded-xl max-h-[1080px] max-w-[1920px] bg-custom-background p-4 gap-4">
          <div className="w-4/12 overflow-y-auto overflow-x-clip space-y-2 rounded-xl scroll-smooth">
            <Header />
            <Main />
            <Technologies />
            <GithubStats />
            <GithubActivityCalendar />
            <Footer />
          </div>
          <div className="w-8/12 overflow-y-auto rounded-xl overflow-x-clip scroll-smooth">
            <div className="h-full bg-background rounded-xl">
              {/* <div className="h-[400px] bg-black"></div> */}
              {/* <div className="h-[400px] bg-red-900"></div> */}
              {/* <div className="h-[400px] bg-green-900"></div> */}
              {/* <div className="h-[400px] bg-black"></div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
