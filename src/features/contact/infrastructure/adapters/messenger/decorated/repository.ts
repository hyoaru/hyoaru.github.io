import type { Messenger } from "@/features/contact/application/ports";
import { LoggingMessenger } from "../logging";

export class DecoratedMessenger implements Messenger {
  private inner: Messenger;

  public constructor(inner: Messenger) {
    this.inner = new LoggingMessenger(inner);
  }

  public async sendMessage(message: string): Promise<void> {
    return this.inner.sendMessage(message);
  }
}
