import { commandBus } from "@/shared/infrastructure/command-bus";
import { queryOptions } from "@tanstack/react-query";
import { GetVisitorCount } from "./application/commands";
import {
  DecoratedVisitorRepository,
  VisitorBadgeVisitorRepository,
} from "./infrastructure/adapters";
import {
  DecoratedVisitorBadgeClient,
  HttpVisitorBadgeClient,
} from "./infrastructure/external";

const visitorBadgeClient = new DecoratedVisitorBadgeClient(
  new HttpVisitorBadgeClient(),
);

const visitorRepository = new DecoratedVisitorRepository(
  new VisitorBadgeVisitorRepository({ visitorBadgeClient }),
);

export const visitorApi = {
  baseKey: ["visitor"] as const,
  query: {
    count: () =>
      queryOptions({
        queryKey: [...visitorApi.baseKey, "count"],
        queryFn: () =>
          commandBus.dispatch(new GetVisitorCount({ visitorRepository })),
        staleTime: 60 * 1000 * 1, // 1 minutes
      }),
  },
};
