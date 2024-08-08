import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as express from 'express';
import { join } from 'path';
import { WinstonLogger } from '@app/logger/winston.logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: false,
    logger: new WinstonLogger(),
  });

  app.enableCors({ credentials: true, origin: true });
  //middlewares
  app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));

  const config = new DocumentBuilder()
    .setTitle('API Server')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(4433);
}
bootstrap().then(() => {
  console.log('Server started on port 4433');
});
