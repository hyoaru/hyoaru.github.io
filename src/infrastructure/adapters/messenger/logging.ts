import type { Messenger } from "@/application/ports/messenger";
import { logger } from "@/infrastructure/logger";

export class LoggingMessenger implements Messenger {
  private inner: Messenger;

  public constructor(inner: Messenger) {
    this.inner = inner;
  }

  public async sendMessage(message: string): Promise<void> {
    try {
      logger.debug(`Sending message`);
      await this.inner.sendMessage(message);
      logger.info(`Successfully sent message`);
    } catch (error) {
      logger.warn(`Error sending message`);
      throw error;
    }
  }
}
