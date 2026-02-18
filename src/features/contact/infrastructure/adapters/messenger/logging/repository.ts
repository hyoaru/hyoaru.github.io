import type { Messenger } from "@/features/contact/application/ports";

export class LoggingMessenger implements Messenger {
  private inner: Messenger;

  public constructor(inner: Messenger) {
    this.inner = inner;
  }

  public async sendMessage(message: string): Promise<void> {
    try {
      console.log("Sending message:", message);
      await this.inner.sendMessage(message);
      console.log("Message sent successfully");
    } catch (error) {
      console.error("Failed to send message:");
      throw error;
    }
  }
}
