import { createRouter as createTanstackRouter } from "@tanstack/react-router";

// App imports
import { routeTree } from "@/routeTree.gen";

export default function createRouter() {
  return createTanstackRouter({
    routeTree,
    defaultPreload: "intent",
    defaultPreloadStaleTime: 0,
    basepath: "/rph-retraction-relationship-visualization/",
    context: {
      queryClient: undefined!,
      authState: undefined!,
    },
  });
}