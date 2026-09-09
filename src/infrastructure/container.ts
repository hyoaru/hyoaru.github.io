import { GetGitUserInformation } from "@/application/use-cases/get-git-user-information";
import { GetRecentGitCommit } from "@/application/use-cases/get-recent-git-commit";
import {
  DecoratedGitRepository,
  GithubGitRepository,
} from "./adapters/git-repository";
import { HttpGithubClient } from "./external/github-client";

const gitRepository = new DecoratedGitRepository(
  new GithubGitRepository(new HttpGithubClient()),
);

const getRecentGitCommit = new GetRecentGitCommit({ gitRepository });
const getGitUserInformation = new GetGitUserInformation({ gitRepository });

export const container = {
  git: {
    getRecentCommit: getRecentGitCommit,
    getUserInformation: getGitUserInformation,
  },
};
