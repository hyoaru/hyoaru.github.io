export class GithubClientRequestError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = "GithubClientRequestError";
    Object.setPrototypeOf(this, GithubClientRequestError.prototype);
  }
}
