import type { Command } from "@/shared/application/commands";
import type { Middleware } from "./interface";
import { logger } from "../logger";

export class LoggingMiddleware<T> implements Middleware<T> {
  public async handle(
    command: Command<T>,
    nextHandler: () => Promise<T>,
  ): Promise<T> {
    const commandName = command.constructor.name;
    logger.info(`Handling command: ${commandName}`, { command });

    try {
      const result = await nextHandler();
      logger.info(`Successfully handled command: ${commandName}`, { result });
      return result;
    } catch (error) {
      logger.error(`Error handling command: ${commandName}`, { error });
      throw error;
    }
  }
}
