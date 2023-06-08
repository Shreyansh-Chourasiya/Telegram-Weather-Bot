import { Injectable } from '@nestjs/common';
import { Telegraf } from 'telegraf';

@Injectable()
export class TelegramBot {
  private bot: Telegraf<any>;

  constructor() {
    this.bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);
    this.setupCommands();
  }

  private setupCommands() {
    this.bot.start((ctx) => ctx.reply('Welcome to the Weather Bot!'));
    // Add more commands as per your requirements

    // Handle all other messages
    this.bot.on('message', (ctx) => {
      ctx.reply('Sorry, I can only respond to commands.');
    });
  }

  startPolling() {
    this.bot.launch();
  }
}
