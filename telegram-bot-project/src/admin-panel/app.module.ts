import { Module } from '@nestjs/common';
import { UserManagementModule } from './user-management/user-management.module';
import { BotSettingsModule } from './bot-settings/bot-settings.module';

@Module({
  imports: [UserManagementModule, BotSettingsModule],
})
export class AppModule {}
