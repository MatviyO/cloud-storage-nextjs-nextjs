"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinstonLogger = void 0;
const common_1 = require("@nestjs/common");
const winston_config_1 = require("./winston.config");
let WinstonLogger = class WinstonLogger {
    log(message) {
        winston_config_1.logger.info(message);
    }
    error(message, trace) {
        winston_config_1.logger.error(`${message} -> ${trace}`);
    }
    warn(message) {
        winston_config_1.logger.warn(message);
    }
    debug(message) {
        winston_config_1.logger.debug(message);
    }
    verbose(message) {
        winston_config_1.logger.verbose(message);
    }
};
exports.WinstonLogger = WinstonLogger;
exports.WinstonLogger = WinstonLogger = __decorate([
    (0, common_1.Injectable)()
], WinstonLogger);
//# sourceMappingURL=winston.logger.js.map