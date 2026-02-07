export class GithubApiError extends Error {
  public status: number;
  constructor(
    status: number,
    message: string = "GithubHub API request failed",
  ) {
    super(message);
    this.status = status;
    this.name = "GithubApiError";
    Object.setPrototypeOf(this, GithubApiError.prototype);
  }
}

export class GithubNoRecentPushError extends Error {
  constructor(username: string) {
    super(`No recent push events found for user: ${username}`);
    this.name = "NoRecentPushError";
    Object.setPrototypeOf(this, GithubNoRecentPushError.prototype);
  }
}
