export class ListeningRepositoryNoRecentTrackError extends Error {
  constructor(username: string, options?: ErrorOptions) {
    super(`No recent track found for user: ${username}`, options);
    this.name = "ListeningRepositoryNoRecentTrackError";
    Object.setPrototypeOf(
      this,
      ListeningRepositoryNoRecentTrackError.prototype,
    );
  }
}
