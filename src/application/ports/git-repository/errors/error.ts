export class GitRepositoryError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = "GitRepositoryError";
    Object.setPrototypeOf(this, GitRepositoryError.prototype);
  }
}
