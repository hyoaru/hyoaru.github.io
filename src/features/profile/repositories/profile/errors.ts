export class ProfileRepositoryError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = "ProfileRepositoryError";
    Object.setPrototypeOf(this, ProfileRepositoryError.prototype);
  }
}

export class ProfileRepositoryErrorPersonalImageNotFoundError extends ProfileRepositoryError {
  constructor(options?: ErrorOptions) {
    super("Failed to Retrieve Personal Image URL.", options);
    this.name = "ProfileRepositoryErrorPersonalImageNotFoundError";
    Object.setPrototypeOf(
      this,
      ProfileRepositoryErrorPersonalImageNotFoundError.prototype,
    );
  }
}
