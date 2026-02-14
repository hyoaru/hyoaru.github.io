import { LoggingMiddleware } from "../middlewares";
import { CommandBus } from "./bus";

export const commandBus = new CommandBus([new LoggingMiddleware()]);
