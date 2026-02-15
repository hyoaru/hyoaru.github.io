import { commandBus } from "@/shared/infrastructure/command-bus";
import { queryOptions } from "@tanstack/react-query";
import {
  GetContributions,
  GetRecentCommit,
  GetUser,
} from "./application/commands";
import {
  DecoratedGitRepository,
  GithubGitRepository,
} from "./infrastructure/adapters";
import {
  DecoratedGitContributionRepository,
  GithubGitContributionRepository,
} from "./infrastructure/adapters/git-contribution-repository";
import {
  DecoratedGithubClient,
  DecoratedGithubContributionsClient,
  HttpGithubClient,
  HttpGithubContributionsClient,
} from "./infrastructure/external";

const githubClient = new DecoratedGithubClient(new HttpGithubClient());
const githubContibutionClient = new DecoratedGithubContributionsClient(
  new HttpGithubContributionsClient(),
);
const gitRepository = new DecoratedGitRepository(
  new GithubGitRepository(githubClient),
);
const gitContributionRepository = new DecoratedGitContributionRepository(
  new GithubGitContributionRepository(githubContibutionClient),
);

export const gitApi = {
  baseKey: ["git"] as const,
  query: {
    recentCommit: (username: string = "hyoaru") =>
      queryOptions({
        queryKey: [...gitApi.baseKey, "recent-commit", username],
        queryFn: () =>
          commandBus.dispatch(
            new GetRecentCommit({
              request: { username },
              gitRepository,
            }),
          ),
        staleTime: 60 * 1000 * 5, // 5 minutes
      }),

    contributions: (username: string = "hyoaru") =>
      queryOptions({
        queryKey: [...gitApi.baseKey, "contribution", username],
        queryFn: () =>
          commandBus.dispatch(
            new GetContributions({
              request: {
                username,
              },
              gitContributionRepository,
            }),
          ),
        staleTime: 60 * 1000 * 60, // 1 hour
      }),

    user: (username: string = "hyoaru") =>
      queryOptions({
        queryKey: [...gitApi.baseKey, "user", username],
        queryFn: () =>
          commandBus.dispatch(
            new GetUser({
              request: {
                username,
              },
              gitRepository,
            }),
          ),
        staleTime: 60 * 1000 * 60, // 1 hour
      }),
  },
};
