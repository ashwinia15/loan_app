// Add loan, EMI schedule and ledger tables; 
// save them in one transaction; 
// stop double credit on repeated payments.
import { decimalToNumber } from "../../common/decimal.transformer.js";
import { LoanStatus } from "../constants.ts/enums/loan.enums.js";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity } from "typeorm";
import { EmiSchedule } from "./emiSchedule.entity.js";
import { Ledger } from "./ledger.entity.js";

@Entity()
export class Loans extends BaseEntity {
    constructor(){
        super();
    }

    @PrimaryGeneratedColumn('uuid')
    loanId: string;

    @Column()
    loanType: string;

    @Column('decimal', { precision: 12, scale: 2, transformer: decimalToNumber })
    amount: number;

    @Column('float')
    interestRate: number;

    @Column('int')
    tenureMonths: number;

    @Column()
    purpose: string;

    @Column({ type: 'enum', enum: LoanStatus, default: LoanStatus.SUBMITTED})
    status: LoanStatus;

    @Column({ nullable: true })
    decisionBy?: string;

    @Column({ nullable: true })
    remarks?: string;

    @Column()
    userId: string;

    @OneToMany(() => EmiSchedule, (emi) => emi.loan)
    emiSchedule?: any[];

    @OneToMany(() => Ledger, (entry) => entry.loan)
    ledgerEntries: Ledger[];
}