import type { Logger } from "../interface";

export class ConsoleLogger implements Logger {
  info(message: string, extra?: object): void {
    console.info(message, extra);
  }
  debug(message: string, extra?: object): void {
    console.debug(message, extra);
  }
  warn(message: string, extra?: object): void {
    console.warn(message, extra);
  }
  error(message: string, extra?: object): void {
    console.error(message, extra);
  }
}
