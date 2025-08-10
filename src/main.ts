import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
        origin: 'http://localhost:3000',
      credentials: true
      })
  const config = new DocumentBuilder()
    .setTitle('Task manager Api Documentation')
    .setDescription('CRUD for tasks and authentication')
    .setVersion('1.0')
    .addTag('Routes')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
