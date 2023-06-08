import { Module } from '@nestjs/common';
import { BotSettingsService } from './bot-settings.service';

@Module({
  providers: [BotSettingsService]
})
export class BotSettingsModule {}
