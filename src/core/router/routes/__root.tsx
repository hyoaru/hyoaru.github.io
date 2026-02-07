import {
  Toast,
  ToastContent,
  ToastDescription,
  ToastIndicator,
  ToastTitle,
  type ToastContentValue,
} from "@heroui/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Outlet />
      <Toast.Provider placement="bottom">
        {({ toast: toastItem }) => {
          const content = toastItem.content as ToastContentValue;
          return (
            <Toast
              className="dark:bg-custom-background rounded-xl border p-2"
              toast={toastItem}
              variant={content.variant}
            >
              <ToastContent>
                <div className="flex items-center gap-4">
                  <ToastIndicator
                    className="scale-120 ps-4"
                    variant={content.variant}
                  />
                  <div className="flex flex-col">
                    <ToastTitle>{content.title}</ToastTitle>
                    <ToastDescription>{content.description}</ToastDescription>
                  </div>
                </div>
              </ToastContent>
              <Toast.ActionButton
                className="dark:border-border rounded-lg border border-transparent"
                {...content.actionProps}
              />
            </Toast>
          );
        }}
      </Toast.Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}
