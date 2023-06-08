import { Controller, Get, Post } from '@nestjs/common';

@Controller('admin')
export class AdminController {
  @Get('settings')
  getSettings(): string {
    // TODO: Return bot settings
    return 'Bot settings';
  }

  @Post('settings')
  updateSettings(): string {
    // TODO: Update bot settings
    return 'Bot settings updated';
  }

  @Get('users')
  getUsers(): string {
    // TODO: Return user accounts
    return 'User accounts';
  }

  @Post('users/:id/block')
  blockUser(): string {
    // TODO: Block user account
    return 'User blocked';
  }

  @Post('users/:id/delete')
  deleteUser(): string {
    // TODO: Delete user account
    return 'User deleted';
  }
}
