export class MessengerError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = "MessengerError";
    Object.setPrototypeOf(this, MessengerError.prototype);
  }
}
