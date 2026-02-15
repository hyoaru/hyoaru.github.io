export class GithubContributionsClientRequestError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = "GithubContributionsClientRequestError";
    Object.setPrototypeOf(
      this,
      GithubContributionsClientRequestError.prototype,
    );
  }
}
