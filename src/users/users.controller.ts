import { Controller, Get, Query, UseGuards } from '@nestjs/common'
import { UsersService } from './users.service.js';
import { JwtAuthGuard } from '../common/guards/jwt.guard.js';
import { RolesGuard } from '../common/guards/roles.guard.js';
import { Role } from '../constants/enums/roles.enum.js';
import { Roles } from '../common/decorators/roles.decorators.js';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {
    }

    @Get()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN)
    findAll(): any {
        return this.usersService.findAll();
    }

}