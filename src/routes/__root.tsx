import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Toaster } from "sonner";
import React from "react";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const TanStackRouterDevtools =
    process.env.NODE_ENV === "production"
      ? () => null
      : React.lazy(() =>
          import("@tanstack/router-devtools").then((res) => ({
            default: res.TanStackRouterDevtools,
          })),
        );

  return (
    <>
      <div className="">
        <Outlet />
      </div>
      <Toaster richColors />
      <TanStackRouterDevtools />
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}
