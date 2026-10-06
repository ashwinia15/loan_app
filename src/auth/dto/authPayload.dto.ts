import { IsEmail, IsEnum, IsString, IsStrongPassword, Length, Matches, Max, } from "class-validator";
import { Role } from "../../constants/enums/roles.enum.js";

export class AuthPayloadDto {
    @IsString()
    username: string; 

    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
    })
    password: string;

    @IsEmail()
    email: string;

    @IsString()
    @Length(10, 10, { message: 'mobileNumber must be exactly 10 digits' })
    @Matches(/^[6-9]\d{9}$/, { message: 'mobileNumber must be a valid 10-digit mobile number' })
    mobileNumber: string;

    @IsEnum(Role)
    role: Role;
}

