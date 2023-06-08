import { Injectable } from '@nestjs/common';

@Injectable()
export class BotSettingsService {
  private botSettings = {
    apiKey: '5762617402:AAGVJCiACTZr610KZxr9ZarGfNdokxl0GQ4',
    // other settings
  };

  getBotSettings() {
    return this.botSettings;
  }

  updateBotSettings(settings: any) {
    this.botSettings = { ...this.botSettings, ...settings };
    return { message: 'Bot settings updated successfully' };
  }
}
