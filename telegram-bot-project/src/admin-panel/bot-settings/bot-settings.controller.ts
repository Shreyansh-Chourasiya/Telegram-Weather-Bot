import { Controller, Get, Patch, Body } from '@nestjs/common';
import { BotSettingsService } from './bot-settings.service';

@Controller('settings')
export class BotSettingsController {
  constructor(private readonly botSettingsService: BotSettingsService) {}

  @Get()
  getBotSettings() {
    return this.botSettingsService.getBotSettings();
  }

  @Patch()
  updateBotSettings(@Body() settings: any) {
    return this.botSettingsService.updateBotSettings(settings);
  }
}
