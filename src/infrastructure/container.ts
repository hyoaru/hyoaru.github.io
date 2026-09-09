import { GetGitUserInformation } from "@/application/use-cases/get-git-user-information";
import { GetGitRecentCommit } from "@/application/use-cases/get-git-recent-commit";
import {
  DecoratedGitRepository,
  GithubGitRepository,
} from "./adapters/git-repository";
import { HttpGithubClient } from "./external/github-client";

const gitRepository = new DecoratedGitRepository(
  new GithubGitRepository(new HttpGithubClient()),
);

const getGitRecentCommit = new GetGitRecentCommit({ gitRepository });
const getGitUserInformation = new GetGitUserInformation({ gitRepository });

export const container = {
  git: {
    getRecentCommit: getGitRecentCommit,
    getUserInformation: getGitUserInformation,
  },
};
