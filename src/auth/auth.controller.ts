import {Body, Controller, Post} from "@nestjs/common";
import { AuthService } from "./auth.service.js";
import { JwtPayload } from "./dto/jwt-payload.dto.js";
import { AuthPayloadDto } from "./dto/authPayload.dto.js";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    async signIn(@Body() userCreds: JwtPayload): Promise<any> {
        const user = await this.authService.validateUser(userCreds);
        return user;
    }

    @Post('register')
    async register(@Body() requestBody: AuthPayloadDto) {
        const user = await this.authService.resgisterUser(requestBody);
        return user;
    }
}