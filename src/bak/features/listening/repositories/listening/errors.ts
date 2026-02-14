export class ListeningRepositoryError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = "ListeningRepositoryError";
    Object.setPrototypeOf(this, ListeningRepositoryError.prototype);
  }
}

export class ListeningRepositoryNoRecentTrackError extends ListeningRepositoryError {
  constructor(username: string, options?: ErrorOptions) {
    super(`No recently listened track found for user: ${username}`, options);
    this.name = "ListeningRepositoryNoRecentTrackError";
    Object.setPrototypeOf(
      this,
      ListeningRepositoryNoRecentTrackError.prototype,
    );
  }
}
