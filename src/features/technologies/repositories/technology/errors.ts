export class TechnologyRepositoryError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = "TechnologyRepositoryError";
    Object.setPrototypeOf(this, TechnologyRepositoryError.prototype);
  }
}
