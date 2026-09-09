import type {
  GetGitUserInformationRequest,
  GetGitUserInformationResponse,
} from "@/application/use-cases/get-git-user-information";
import type {
  GetGitRecentCommitRequest,
  GetGitRecentCommitResponse,
} from "@/application/use-cases/get-git-recent-commit";
import { queryOptions } from "@tanstack/react-query";
import { container } from "../container";

export const useGitActions = () => {
  return {
    getGitRecentCommit: (request: GetGitRecentCommitRequest) =>
      queryOptions({
        queryKey: ["git", "recent-commit", request],
        queryFn: (): Promise<GetGitRecentCommitResponse> => {
          return container.git.getRecentCommit.execute(request);
        },
      }),
    getGitUserInformation: (request: GetGitUserInformationRequest) =>
      queryOptions({
        queryKey: ["git", "user-information", request],
        queryFn: (): Promise<GetGitUserInformationResponse> => {
          return container.git.getUserInformation.execute(request);
        },
      }),
  };
};
