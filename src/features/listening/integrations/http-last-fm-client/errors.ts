export class LastFmApiError extends Error {
  public status: number;
  constructor(status: number, message: string = "LastFm API request failed") {
    super(message);
    this.status = status;
    this.name = "LastFmApiError";
    Object.setPrototypeOf(this, LastFmApiError.prototype);
  }
}

export class LastFmNoRecentTracksError extends Error {
  username: string;

  constructor(username: string) {
    super(`No recent tracks found for user "${username}".`);
    this.name = "LastFmNoRecentTracksError";
    this.username = username;
  }
}
