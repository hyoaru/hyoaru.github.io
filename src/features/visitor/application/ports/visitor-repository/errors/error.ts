export class VisitorRepositoryError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = "VisitorRepositoryError";
    Object.setPrototypeOf(this, VisitorRepositoryError.prototype);
  }
}
