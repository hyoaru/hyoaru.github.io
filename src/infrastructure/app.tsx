import {
  QueryClient,
  QueryClientProvider,
  useQueryClient,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "@tanstack/react-router";
import { ThemeProvider } from "next-themes";
import { useState } from "react";
import { router } from "./router";

export default function App() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000 * 60,
            refetchOnWindowFocus: true,
          },
        },
      }),
  );

  return (
    <ThemeProvider enableSystem attribute="data-theme" defaultTheme="system">
      <QueryClientProvider client={queryClient}>
        <InnerApp />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

function InnerApp() {
  const queryClient = useQueryClient();
  return <RouterProvider router={router} context={{ queryClient }} />;
}
