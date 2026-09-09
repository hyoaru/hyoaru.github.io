import axios from "axios";
import type { FormSubmitClient } from "./interface";
import { FormSubmitClientError } from "./errors";

export class HttpFormSubmitClient implements FormSubmitClient {
  public async sendMessage(request: {
    email: string;
    message: string;
  }): Promise<void> {
    try {
      await axios.post(
        `https://formsubmit.co/ajax/hello@jadecabrera.com`,
        {
          body: JSON.stringify({
            message: `From: ${request.email}\nMessage: ${request.message}`,
          }),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    } catch (error) {
      if (error instanceof FormSubmitClientError) {
        throw error;
      }

      const message = error instanceof Error ? error.message : String(error);
      throw new FormSubmitClientError(`Send message error: ${message}`, {
        cause: error,
      });
    }
  }
}
