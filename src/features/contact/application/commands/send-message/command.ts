import type { Command } from "@/shared/application/commands";
import type { Messenger } from "../../ports";
import type { SendMessageRequest } from "./request";

export class SendMessage implements Command<void> {
  readonly request: SendMessageRequest;
  readonly messenger: Messenger;

  public constructor(init: {
    request: SendMessageRequest;
    messenger: Messenger;
  }) {
    this.request = init.request;
    this.messenger = init.messenger;
  }

  public async execute() {
    await this.messenger.sendMessage(this.request.message);
  }
}
