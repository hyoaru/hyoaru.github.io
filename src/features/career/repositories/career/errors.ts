export class CareerRepositoryError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = "CareerRepositoryError";
    Object.setPrototypeOf(this, CareerRepositoryError.prototype);
  }
}
