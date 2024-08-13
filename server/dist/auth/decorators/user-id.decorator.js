"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserId = void 0;
const common_1 = require("@nestjs/common");
exports.UserId = (0, common_1.createParamDecorator)((data, ctx) => {
    console.log("userid");
    const request = ctx.switchToHttp().getRequest();
    return request.user.id || null;
});
//# sourceMappingURL=user-id.decorator.js.map