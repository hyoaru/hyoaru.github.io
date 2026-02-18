import { logger } from "@/shared/infrastructure/logger";
import type { SendMessageRequest } from "../../dto";
import type { FormSubmitClient } from "../../interface";

export class LoggingFormSubmitClient implements FormSubmitClient {
  readonly inner: FormSubmitClient;

  public constructor(inner: FormSubmitClient) {
    this.inner = inner;
  }
  public async sendMessage(request: SendMessageRequest): Promise<void> {
    try {
      logger.info(`Sending message to ${request.email}`);
      await this.inner.sendMessage(request);
      logger.info(`Message sent to ${request.email}`);
    } catch (error) {
      logger.error(`Failed to send message to ${request.email}`);
      throw error;
    }
  }
}
