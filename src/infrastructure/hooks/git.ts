import type {
  GetRecentGitCommitRequest,
  GetRecentGitCommitResponse,
} from "@/application/use-cases/get-recent-git-commit";
import { queryOptions, useQueryClient } from "@tanstack/react-query";
import { container } from "../container";

export const useGitActions = () => {
  const queryClient = useQueryClient();
  return {
    getRecentCommit: (request: GetRecentGitCommitRequest) =>
      queryOptions({
        queryKey: ["git", "recent-commit", request],
        queryFn: (): Promise<GetRecentGitCommitResponse> => {
          return container.git.getRecentCommit.execute(request);
        },
      }),
  };
};
