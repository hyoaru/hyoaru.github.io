import { GitRepositoryError } from "./error";

export class GitRepositoryNoRecentCommitError extends GitRepositoryError {
  constructor(username: string, options?: ErrorOptions) {
    super(`No recent commit found for user: ${username}`, options);
    this.name = "GitRepositoryNoRecentCommitError";
    Object.setPrototypeOf(this, GitRepositoryNoRecentCommitError.prototype);
  }
}
