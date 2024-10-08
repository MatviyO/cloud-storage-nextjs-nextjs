"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston = require("winston");
require("winston-daily-rotate-file");
const logFormat = winston.format.printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
});
const colorizedFormat = winston.format.combine(winston.format.colorize(), winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), winston.format.printf(({ timestamp, level, message }) => {
    return `${timestamp} ${level}: ${message}`;
}));
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(winston.format.timestamp(), winston.format.json(), logFormat),
    transports: [
        new winston.transports.Console({
            format: colorizedFormat,
        }),
        new winston.transports.DailyRotateFile({
            filename: 'logs/application-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d',
        }),
    ],
});
exports.logger = logger;
//# sourceMappingURL=winston.config.js.map