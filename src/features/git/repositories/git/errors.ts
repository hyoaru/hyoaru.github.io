export class RecentCommitNotFoundError extends Error {
  username: string;

  constructor(username: string) {
    super(`No recent commit found for ${username}.`);
    this.name = "RecentCommitNotFoundError";
    this.username = username;
  }
}

export class ContributionStatsUnavailableError extends Error {
  username: string;

  constructor(username: string) {
    super(`Contribution stats unavailable for ${username}.`);
    this.name = "ContributionStatsUnavailableError";
    this.username = username;
  }
}

export class UserInformationNotFoundError extends Error {
  username: string;

  constructor(username: string) {
    super(`User information not found for ${username}.`);
    this.name = "UserInformationNotFoundError";
    this.username = username;
  }
}
