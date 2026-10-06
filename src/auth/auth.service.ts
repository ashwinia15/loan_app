import {Injectable, UnauthorizedException} from '@nestjs/common';
import { UsersService } from '../users/users.service.js';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './dto/jwt-payload.dto.js';
import { AuthPayloadDto } from './dto/authPayload.dto.js';

@Injectable()
export class AuthService{
    constructor(
        private  readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ){}

    async validateUser(payload: JwtPayload): Promise<any> {
        const user = await this.usersService.findOne(payload.username);
        if(user?.password !== payload.password){
           throw new UnauthorizedException();
       }
       const {password, ...userDetails} = user;
       const token =  this.jwtService.sign(userDetails);
       return { access_token: token };
    }

    async resgisterUser(payload: AuthPayloadDto): Promise<any> {
        const user = await this.usersService.findOne(payload.username);
        if(user){
            throw new UnauthorizedException('User already exists');
        }
        const newUser = await this.usersService.createUser(payload);
        return newUser;
    }

}