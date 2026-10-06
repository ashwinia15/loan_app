import { IsEnum, IsOptional, IsString } from "class-validator";
import { LoanStatus } from "../entities/loan.entity.js";

export class DecideLoanDto {
    @IsEnum(LoanStatus)
    remarks: string;

    @IsOptional() @IsString()
    status: string;
}

export class Loan {
  id: string;
  userId: string;
  amount: number;
  tenureMonths: number;
  purpose: string;
  status: LoanStatus;
  decisionBy?: string;
  remarks?: string;
  createdAt: Date;
}