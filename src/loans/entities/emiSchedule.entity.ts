import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { decimalToNumber } from "../../common/decimal.transformer.js";
import { EmiStatus } from "../constants.ts/enums/loan.enums.js";
import { Loans } from "./loans.entity.js";

@Entity()
export class EmiSchedule extends BaseEntity {
    
    constructor(){
        super();
    }

    @PrimaryGeneratedColumn('uuid')
    emiId: string;

    @Column('int')
    installmentNo: number;

    @Column('decimal', { precision: 12, scale: 2, transformer: decimalToNumber })
    emiAmount: number;

    @Column({ type: 'date' })
    dueDate: Date;

    @Column({type: 'enum', enum: EmiStatus, default: EmiStatus.PENDING})
    emiStatus: EmiStatus

    @ManyToOne(() => Loans, loan => loan.emiSchedule, {onDelete: 'CASCADE'})
    loan: Loans
}