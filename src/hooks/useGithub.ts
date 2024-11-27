import { githubService } from "@/services/github";
import { useQuery } from "@tanstack/react-query";

export default function useGithub() {
  const getContributionStats = () =>
    useQuery({
      queryFn: githubService.getContributionStats,
      queryKey: ["github_contribution_stats"],
    });

  const getBaseUserInformation = () =>
    useQuery({
      queryFn: githubService.getBaseUserInformation,
      queryKey: ["github_base_user_information"],
    });

  const getRecentCommit = () =>
    useQuery({
      queryFn: githubService.getRecentCommit,
      queryKey: ["github_recent_commit"],
      staleTime: 60 * 1000 * 30,
    });

  return {
    getContributionStats,
    getBaseUserInformation,
    getRecentCommit,
  };
}
