import { UserService } from './user-management.service';
export declare class UserManagementController {
    private readonly userService;
    constructor(userService: UserService);
    getAllUsers(): any[];
    deleteUser(id: string): {
        message: string;
    };
}
