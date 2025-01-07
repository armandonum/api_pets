import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Aumentar el límite del tamaño del cuerpo de las solicitudes
  app.use(bodyParser.json({ limit: '10mb' })); // Aumenta el límite de JSON
  app.use(bodyParser.urlencoded({ limit: '10mb', extended: true })); // Aumenta el límite de URL-encoded

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
