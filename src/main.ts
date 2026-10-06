import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';
import { LoggingInterCeptor } from './common/interceptor/logging.interceptor.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // enables application to automatically strip properties which are not present in the DTO class but we got in request body.
    forbidNonWhitelisted: true, // enabled application to reject the request if it contains any properties which are not whtelisted in the DTO class.
    transform: true,  // enables the application level auto-transformation of payloads to be objects typed according to their DTO classes
  }));


  app.useGlobalInterceptors(new LoggingInterCeptor()); // enables application level logging interceptor to log all the requests and responses.
  await app.listen(process.env.PORT ?? 3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
await bootstrap();
