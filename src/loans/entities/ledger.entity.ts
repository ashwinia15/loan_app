import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { decimalToNumber } from "../../common/decimal.transformer.js";
import { TransactionType } from "../constants.ts/enums/loan.enums.js";
import { Loans } from "./loans.entity.js";

@Entity()
export class Ledger extends BaseEntity {
    constructor(){
        super();
    }

    @PrimaryGeneratedColumn('uuid')
    ledgerId: string;

    @Column('decimal', {precision: 12, scale: 2, transformer: decimalToNumber})
    amount: number;

    @Column({type: 'enum', enum: TransactionType})
    transactionType: string;

    // The "receipt number". unique: true is what blocks double credit.
    @Column({ nullable: true, unique: true })
    paymentReference?: string;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(() => Loans, (loan) => loan.ledgerEntries, { onDelete: 'CASCADE' })
    loan: Loans;



}