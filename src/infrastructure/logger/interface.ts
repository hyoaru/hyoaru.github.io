export interface Logger {
  info(message: string, extra?: object): void;
  debug(message: string, extra?: object): void;
  warn(message: string, extra?: object): void;
  error(message: string, extra?: object): void;
}
