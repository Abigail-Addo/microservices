import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 8080;
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT || 8080, () => {
    console.log(`Listening on port ${PORT}`);
  });
}
bootstrap();
