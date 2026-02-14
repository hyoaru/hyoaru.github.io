export class GitRepositoryError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = "GitRepositoryBaseError";
    Object.setPrototypeOf(this, GitRepositoryError.prototype);
  }
}

export class GitRepositoryRecentCommitNotFoundError extends GitRepositoryError {
  constructor(username: string, options?: ErrorOptions) {
    super(`No recent commit found for ${username}.`, options);
    this.name = "GitRepositoryRecentCommitNotFoundError";
    Object.setPrototypeOf(
      this,
      GitRepositoryRecentCommitNotFoundError.prototype,
    );
  }
}

export class GitRepositoryContributionStatsUnavailableError extends GitRepositoryError {
  constructor(username: string, options?: ErrorOptions) {
    super(`Contribution stats unavailable for ${username}.`, options);
    this.name = "GitRepositoryContributionStatsUnavailableError";
    Object.setPrototypeOf(
      this,
      GitRepositoryContributionStatsUnavailableError.prototype,
    );
  }
}

export class GitRepositoryUserInformationNotFoundError extends GitRepositoryError {
  constructor(username: string, options?: ErrorOptions) {
    super(`User information not found for ${username}.`, options);
    this.name = "UserInformationNotFoundError";
    Object.setPrototypeOf(
      this,
      GitRepositoryUserInformationNotFoundError.prototype,
    );
  }
}
