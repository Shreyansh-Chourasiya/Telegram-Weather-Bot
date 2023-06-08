import { Module } from '@nestjs/common';
import { UserManagementController } from './user-management.controller';

@Module({
  providers: [UserManagementController]
})
export class UserManagementModule {}
