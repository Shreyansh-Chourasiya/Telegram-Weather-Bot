import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [];

  getAllUsers() {
    return this.users;
  }

  deleteUser(id: string) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
      return { message: 'User deleted successfully' };
    }
    return { message: 'User not found' };
  }
}
