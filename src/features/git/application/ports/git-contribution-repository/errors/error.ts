export class GitContributionRepositoryError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = "GitContributionRepositoryError";
    Object.setPrototypeOf(this, GitContributionRepositoryError.prototype);
  }
}
