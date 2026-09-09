export class FormSubmitClientError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = "FormSubmitClientError";
    Object.setPrototypeOf(this, FormSubmitClientError.prototype);
  }
}
