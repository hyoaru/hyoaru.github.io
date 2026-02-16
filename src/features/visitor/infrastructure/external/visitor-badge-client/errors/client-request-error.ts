export class VisitorBadgeClientRequestError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = "VisitorBadgeClientRequestError";
    Object.setPrototypeOf(this, VisitorBadgeClientRequestError.prototype);
  }
}
