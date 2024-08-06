"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const express = require("express");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: false });
    app.enableCors({ credentials: true, origin: true });
    app.use('/uploads', express.static((0, path_1.join)(__dirname, '..', 'uploads')));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('API Server')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('swagger', app, document);
    await app.listen(4433);
}
bootstrap().then(() => {
    console.log('Server started on port 4433');
});
//# sourceMappingURL=main.js.map