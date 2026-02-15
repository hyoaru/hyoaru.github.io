export class LastfmClientRequestError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = "LastfmClientRequestError";
    Object.setPrototypeOf(this, LastfmClientRequestError.prototype);
  }
}
