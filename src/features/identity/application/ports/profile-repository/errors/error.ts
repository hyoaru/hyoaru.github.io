export class ProfileRepositoryError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = "ProfileRepositoryError";
    Object.setPrototypeOf(this, ProfileRepositoryError.prototype);
  }
}
