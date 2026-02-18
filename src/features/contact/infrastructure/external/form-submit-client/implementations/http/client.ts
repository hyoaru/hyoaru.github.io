import axios, { type AxiosInstance } from "axios";
import type { SendMessageRequest } from "../../dto";
import {
  FormSubmitClientError,
  FormSubmitClientRequestError,
} from "../../errors";
import type { FormSubmitClient } from "../../interface";

export class HttpFormSubmitClient implements FormSubmitClient {
  readonly api: AxiosInstance;

  public constructor(api?: AxiosInstance) {
    this.api =
      api ||
      axios.create({
        baseURL: "https://formsubmit.co/ajax",
        headers: { "Content-Type": "application/json" },
      });
  }

  private async request<T>(execute: () => Promise<T>): Promise<T> {
    try {
      return await execute();
    } catch (error: unknown) {
      if (error instanceof FormSubmitClientError) {
        throw error;
      }

      if (axios.isAxiosError(error)) {
        throw new FormSubmitClientRequestError(
          `An error has occured while requesting: ${error.message}`,
          { cause: error },
        );
      }

      const message = error instanceof Error ? error.message : String(error);
      throw new FormSubmitClientError(`An error has occured: ${message}`, {
        cause: error,
      });
    }
  }

  public async sendMessage(request: SendMessageRequest): Promise<void> {
    return await this.request(async () => {
      await this.api.post(`/${request.email}`, {
        body: JSON.stringify({ message: request.message }),
      });
    });
  }
}
