export class HttpGithubClientError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = "HttpGithubClientBaseError";
    Object.setPrototypeOf(this, HttpGithubClientError.prototype);
  }
}

export class HttpGithubClientRequestError extends HttpGithubClientError {
  public status: number;

  constructor(status: number, options?: ErrorOptions) {
    super(`Github HTTP Client Failure (${status})`, options);
    this.name = "HttpGithubClientRequestError";
    this.status = status;
    Object.setPrototypeOf(this, HttpGithubClientRequestError.prototype);
  }
}

export class HttpGithubClientNoRecentPushError extends HttpGithubClientError {
  constructor(username: string, options?: ErrorOptions) {
    super(`No recent push events found for user: ${username}`, options);
    this.name = "HttpGithubClientNoRecentPushError";
    Object.setPrototypeOf(this, HttpGithubClientNoRecentPushError.prototype);
  }
}
