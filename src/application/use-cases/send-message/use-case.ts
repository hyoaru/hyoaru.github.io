import type { Messenger } from "@/application/ports/messenger";
import type { UseCase } from "../interface";
import type { SendMessageRequest } from "./request";

export class SendMessage implements UseCase<SendMessageRequest, void> {
  readonly messenger: Messenger;

  public constructor(init: { messenger: Messenger }) {
    this.messenger = init.messenger;
  }
  public async execute(request: SendMessageRequest): Promise<void> {
    return this.messenger.sendMessage(request.message);
  }
}
