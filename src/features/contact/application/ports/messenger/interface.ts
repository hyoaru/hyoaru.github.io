export interface Messenger {
  sendMessage(message: string): Promise<void>;
}
