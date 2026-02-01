import { Header } from "@/components/partials/header";
import { Profile } from "@/sections/profile";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="mx-auto max-w-[1680px] p-4">
      <div className="flex gap-5">
        <div className="h-fit w-[40%] shrink-0 space-y-2.5">
          <Header />
          <Profile />
        </div>
        <div className="h-fit w-full"></div>
      </div>
    </div>
  );
}
