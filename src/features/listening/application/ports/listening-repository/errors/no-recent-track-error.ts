export class ListeningRepositoryNoRecentTrackError extends Error {
  constructor(username: string, options?: ErrorOptions) {
    super(`No recent commit found for user: ${username}`, options);
    this.name = "ListeningRepositoryNoRecentTrackError";
    Object.setPrototypeOf(
      this,
      ListeningRepositoryNoRecentTrackError.prototype,
    );
  }
}
