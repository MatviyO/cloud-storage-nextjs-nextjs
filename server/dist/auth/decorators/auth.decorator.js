"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuardWithBearer = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_guard_1 = require("../guards/jwt.guard");
const AuthGuardWithBearer = () => (0, common_1.applyDecorators)((0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard), (0, swagger_1.ApiBearerAuth)());
exports.AuthGuardWithBearer = AuthGuardWithBearer;
//# sourceMappingURL=auth.decorator.js.map