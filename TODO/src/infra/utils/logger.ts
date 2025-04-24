import { createLogger, format, transports } from "winston";
import winston = require("winston");

export const logger = createLogger({
  level: "info",
  format: format.combine(format.timestamp(), format.json()),
  transports: [new transports.Console()],
});

export class Logger {
  private instance: winston.Logger;

  private buildMessage(data: string, stack?: any) {
    const objectToLogger =
      stack && typeof stack === 'object' ? `, ${JSON.stringify(stack, null, 2)}` : ''
    return `${data}${objectToLogger}`
  }

  public debug(data: string, stack?: any): void {
    this.instance.debug(this.buildMessage(data, stack));
  }
}
