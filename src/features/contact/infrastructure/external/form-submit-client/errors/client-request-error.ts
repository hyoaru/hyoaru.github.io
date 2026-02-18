export class FormSubmitClientRequestError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = "FormSubmitClientRequestError";
    Object.setPrototypeOf(this, FormSubmitClientRequestError.prototype);
  }
}
