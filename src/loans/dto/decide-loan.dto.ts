import { IsEnum, IsOptional, IsString } from "class-validator";
import { LoanStatus } from "../constants.ts/enums/loan.enums.js";

export class DecideLoanDto {
    @IsEnum(LoanStatus)
    status: LoanStatus;

    @IsOptional() @IsString()
    remarks: string;
}