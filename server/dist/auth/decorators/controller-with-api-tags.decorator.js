"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerWithApiTags = ControllerWithApiTags;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
function capitalizeFirstLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}
function ControllerWithApiTags(routeAndTag) {
    return (target) => {
        const capitalizedTagName = capitalizeFirstLetter(routeAndTag);
        (0, common_1.Controller)(routeAndTag)(target);
        (0, swagger_1.ApiTags)(capitalizedTagName)(target);
    };
}
//# sourceMappingURL=controller-with-api-tags.decorator.js.map