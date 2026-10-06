import { ExtractJwt, Strategy} from 'passport-jwt';
import {PassportStrategy} from '@nestjs/passport';
import {Injectable, UnauthorizedException} from '@nestjs/common';
import {AuthService} from '../../auth/auth.service.js';
import { JwtPayload } from '../../auth/dto/jwt-payload.dto.js';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET || 'default_secret',
        });
    }
    async validate(payload: JwtPayload): Promise<any>{
        const {password, ...user} = payload;
        return user;
    }

}