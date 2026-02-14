import type { Command } from "@/core/application/commands";
import type { Middleware } from "../middlewares";

export class CommandBus {
  private middlewares: Middleware<unknown>[];

  public constructor(middlwares?: Middleware<unknown>[]) {
    this.middlewares = middlwares || [];
  }

  public async dispatch<T>(command: Command<T>): Promise<T> {
    let handler = () => command.execute();

    for (const middleware of [...this.middlewares].reverse()) {
      const next = handler;
      handler = () =>
        (middleware as Middleware<T>).handle(command, next);
    }

    return handler();
  }
}
