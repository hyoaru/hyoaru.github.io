export class LastfmClientError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = "LastfmClientError";
    Object.setPrototypeOf(this, LastfmClientError.prototype);
  }
}
