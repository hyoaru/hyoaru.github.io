export class GithubClientError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = "GithubClientError";
    Object.setPrototypeOf(this, GithubClientError.prototype);
  }
}
