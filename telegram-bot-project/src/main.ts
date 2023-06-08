import { NestFactory } from '@nestjs/core';
import { TelegramBot } from './telegram.bot';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext();
  const telegramBot = app.get(TelegramBot);
  telegramBot.startPolling();
}
bootstrap();
