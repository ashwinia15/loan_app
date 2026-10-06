
import {Controller, Post} from "@nestjs/common";
import { LoansService } from "./loans.service.js";

@Controller("loans")
export class LoansController {
    constructor(private readonly loansService: LoansService) {
    }

    @Post()
    createLoan() {

    }
}