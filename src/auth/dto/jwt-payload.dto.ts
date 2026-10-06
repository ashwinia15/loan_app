import { IsEnum, IsOptional, IsString } from "class-validator";
import { Role } from "../../constants/enums/roles.enum.js";

export class JwtPayload {
    @IsString()
    username: string;

    @IsString()
    password: string;

    @IsOptional()
    sub: number;

    @IsOptional()
    iat: number;

    @IsOptional()
    expiresIn: number;

    @IsEnum(Role)
    role: Role;
}