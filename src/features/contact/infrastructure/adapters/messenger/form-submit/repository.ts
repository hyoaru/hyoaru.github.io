import {
  MessengerError,
  type Messenger,
} from "@/features/contact/application/ports";
import type { FormSubmitClient } from "../../../external";

export class FormSubmitMessenger implements Messenger {
  readonly formSubmitClient: FormSubmitClient;

  public constructor(init: { formSubmitClient: FormSubmitClient }) {
    this.formSubmitClient = init.formSubmitClient;
  }

  private async request<T>(execute: () => Promise<T>): Promise<T> {
    try {
      return await execute();
    } catch (error) {
      if (error instanceof MessengerError) {
        throw error;
      }

      const message = error instanceof Error ? error.message : String(error);
      throw new MessengerError(`An error has occured: ${message}`, {
        cause: error,
      });
    }
  }

  public async sendMessage(message: string): Promise<void> {
    await this.request(() =>
      this.formSubmitClient.sendMessage({
        email: "hello@jadecabrera.com",
        message: message,
      }),
    );
  }
}
