export enum LoanStatus {
  SUBMITTED = 'submitted',
  UNDER_REVIEW = 'under_review',
  APPROVED = 'approved',
  REJECTED = 'rejected',
}

export enum EmiStatus {
  PENDING = 'pending',
  PAID = 'paid',
}

export enum TransactionType {
  DISBURSEMENT = 'disbursement',
  EMI_PAYMENT = 'emi_payment',
}