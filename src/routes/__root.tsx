import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Toaster } from "sonner";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div className="">
        <Outlet />
      </div>
      <Toaster richColors />
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}
