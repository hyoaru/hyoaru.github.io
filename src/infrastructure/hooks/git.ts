import type { GetGitContributionsResponse } from "@/application/use-cases/get-git-contributions";
import type { GetGitRecentCommitResponse } from "@/application/use-cases/get-git-recent-commit";
import type { GetGitUserInformationResponse } from "@/application/use-cases/get-git-user-information";
import { queryOptions } from "@tanstack/react-query";
import { container } from "../container";

export const useGitActions = () => {
  return {
    getRecentCommit: () =>
      queryOptions({
        queryKey: ["git", "recent-commit"],
        queryFn: (): Promise<GetGitRecentCommitResponse> => {
          return container.git.getRecentCommit.execute({ username: "hyoaru" });
        },
      }),
    getUserInformation: () =>
      queryOptions({
        queryKey: ["git", "user-information"],
        queryFn: (): Promise<GetGitUserInformationResponse> => {
          return container.git.getUserInformation.execute({
            username: "hyoaru",
          });
        },
      }),
    getContributions: () =>
      queryOptions({
        queryKey: ["git", "contributions"],
        queryFn: (): Promise<GetGitContributionsResponse> => {
          return container.git.getContributions.execute({ username: "hyoaru" });
        },
      }),
  };
};
