import type { Command } from "@/core/application/commands";

export interface Middleware<T> {
  handle(command: Command<T>, nextHandler: () => Promise<T>): Promise<T>;
}
