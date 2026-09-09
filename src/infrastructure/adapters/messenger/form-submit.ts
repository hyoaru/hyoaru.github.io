import {
  type Messenger,
  MessengerError,
} from "@/application/ports/messenger";
import type { FormSubmitClient } from "@/infrastructure/external/form-submit-client";

export class FormSubmitMessenger implements Messenger {
  private formSubmitClient: FormSubmitClient;

  public constructor(formSubmitClient: FormSubmitClient) {
    this.formSubmitClient = formSubmitClient;
  }

  public async sendMessage(message: string): Promise<void> {
    try {
      await this.formSubmitClient.sendMessage({
        email: "hello@jadecabrera.com",
        message,
      });
    } catch (error) {
      if (error instanceof MessengerError) {
        throw error;
      }

      const message_ = error instanceof Error ? error.message : String(error);
      throw new MessengerError(`Send message error: ${message_}`, {
        cause: error,
      });
    }
  }
}
