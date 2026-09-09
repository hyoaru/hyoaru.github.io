import type {
  GetGitUserInformationRequest,
  GetGitUserInformationResponse,
} from "@/application/use-cases/get-git-user-information";
import type {
  GetRecentGitCommitRequest,
  GetRecentGitCommitResponse,
} from "@/application/use-cases/get-recent-git-commit";
import { queryOptions } from "@tanstack/react-query";
import { container } from "../container";

export const useGitActions = () => {
  return {
    getRecentCommit: (request: GetRecentGitCommitRequest) =>
      queryOptions({
        queryKey: ["git", "recent-commit", request],
        queryFn: (): Promise<GetRecentGitCommitResponse> => {
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
