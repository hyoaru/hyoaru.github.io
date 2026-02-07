export class NoRecentTrackError extends Error {
  username: string;

  constructor(username: string) {
    super(`No recently listened track found for user '${username}'`);
    this.name = "NoRecentTrackError";
    this.username = username;
  }
}
