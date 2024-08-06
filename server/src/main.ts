import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: false });

  app.enableCors({credentials: true, origin: true});

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
