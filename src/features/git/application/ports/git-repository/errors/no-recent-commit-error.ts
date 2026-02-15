export class GitRepositoryNoRecentCommitError extends Error {
  constructor(username: string, options?: ErrorOptions) {
    super(`No recent commit found for user: ${username}`, options);
    this.name = "GitRepositoryNoRecentCommitError";
    Object.setPrototypeOf(this, GitRepositoryNoRecentCommitError.prototype);
  }
}
