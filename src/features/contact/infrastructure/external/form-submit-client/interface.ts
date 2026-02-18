import type { SendMessageRequest } from "./dto/send-message.request";

export interface FormSubmitClient {
  sendMessage(request: SendMessageRequest): Promise<void>;
}
