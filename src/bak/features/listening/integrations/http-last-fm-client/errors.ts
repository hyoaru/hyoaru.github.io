export class HttpLastFmClientError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = "HttpLastFmClientError";
    Object.setPrototypeOf(this, HttpLastFmClientError.prototype);
  }
}

export class HttpLastFmClientRequestError extends HttpLastFmClientError {
  public status: number;

  constructor(status: number, options?: ErrorOptions) {
    super(`LastFm HTTP Client Failure (${status})`, options);
    this.name = "HttpLastFmClientRequestError";
    this.status = status;
    Object.setPrototypeOf(this, HttpLastFmClientRequestError.prototype);
  }
}

export class HttpLastFmClientNoRecentTrackError extends HttpLastFmClientError {
  constructor(username: string, options?: ErrorOptions) {
    super(`No recent tracks found for user "${username}".`, options);
    this.name = "HttpLastFmClientNoRecentTrackError";
    Object.setPrototypeOf(this, HttpLastFmClientNoRecentTrackError.prototype);
  }
}
