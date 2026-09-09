import type {
  GetGitContributionsRequest,
  GetGitContributionsResponse,
} from "@/application/use-cases/get-git-contributions";
import type { GetGitRecentCommitResponse } from "@/application/use-cases/get-git-recent-commit";
import type {
  GetGitUserInformationRequest,
  GetGitUserInformationResponse,
} from "@/application/use-cases/get-git-user-information";
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
    getUserInformation: (request: GetGitUserInformationRequest) =>
      queryOptions({
        queryKey: ["git", "user-information", request],
        queryFn: (): Promise<GetGitUserInformationResponse> => {
          return container.git.getUserInformation.execute(request);
        },
      }),
    getContributions: (request: GetGitContributionsRequest) =>
      queryOptions({
        queryKey: ["git", "contributions", request],
        queryFn: (): Promise<GetGitContributionsResponse> => {
          return container.git.getContributions.execute(request);
        },
      }),
  };
};
