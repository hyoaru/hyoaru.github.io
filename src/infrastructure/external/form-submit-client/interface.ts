export interface FormSubmitClient {
  sendMessage(request: { email: string; message: string }): Promise<void>;
}
