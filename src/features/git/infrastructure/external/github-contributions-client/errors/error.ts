export class GithubContributionsClientError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = "GithubContributionsClientError";
    Object.setPrototypeOf(this, GithubContributionsClientError.prototype);
  }
}
