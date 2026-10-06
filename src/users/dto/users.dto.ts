import {IsString, IsNotEmpty, IsEmail, IsNumber, Max, Length, isString, Matches, IsOptional} from 'class-validator';
export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    password: string;

    @IsString()
    @Length(10, 10, { message: 'mobileNumber must be exactly 10 digits' })
    @Matches(/^[6-9]\d{9}$/, { message: 'mobileNumber must be a valid 10-digit mobile number' })
    mobileNumber: string;

    @IsNumber()
    @IsOptional()
    ActiveLoans: number;

    @IsNumber()
    @IsOptional()
    noOfApprovedLoans: number;
}