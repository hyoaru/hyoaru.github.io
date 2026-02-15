export class ListeningRepositoryError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = "ListeningRepositoryError";
    Object.setPrototypeOf(this, ListeningRepositoryError.prototype);
  }
}
