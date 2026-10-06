import { isInt, IsInt, IsNotEmpty, IsNumber, IsPositive, isPositive, IsString, Max, Min } from "class-validator";

export class CreateLoanDto {
    @IsNumber() @Max(1000000) @IsPositive()
    amount: number;

    @IsInt() @IsPositive() @Min(3) @Max(360)
    tenureMonths: number;

    @IsInt() @IsPositive() @Min(1) @Max(100)
    interestRate: number;

    @IsString() @IsNotEmpty()
    purpose: string;
}