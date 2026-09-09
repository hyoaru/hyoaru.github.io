import { Toast } from "@heroui/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div className="h-dvh">
        <div className="flex h-full flex-col items-start justify-start">
          <Outlet />
        </div>
      </div>
      <Toast.Provider />
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}
