import { NestFactory } from '@nestjs/core';
import { MyAppModule } from './my-app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(MyAppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));
  const prisma = app.get('PrismaService');
  await prisma.enableShutdownhooks(app);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
