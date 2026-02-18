import type { SendMessageRequest } from "../../dto";
import type { FormSubmitClient } from "../../interface";
import { LoggingFormSubmitClient } from "../logging";

export class DecoratedFormSubmitClient implements FormSubmitClient {
  readonly inner: FormSubmitClient;

  public constructor(inner: FormSubmitClient) {
    this.inner = new LoggingFormSubmitClient(inner);
  }
  public async sendMessage(request: SendMessageRequest): Promise<void> {
    await this.inner.sendMessage(request);
  }
}
