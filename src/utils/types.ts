export interface IUserDetails {
  userID?: string;
  fullName?: string;
  mobileNumber?: string;
  email?: string;
  createdOn?: string;
}

export interface ITempUserDetails extends IUserDetails {
  password?: string;
  confirmPassword?: string;
}

export interface ExpenseDetails {
  id?: string;
  title: ExpenseEnums;
  amount: number;
  createdOn: string;
}

export enum ExpenseEnums {
  SHOPPING = 'shopping',
  GROCERIES = 'groceries',
  UTILITIES = 'utilities',
  MEDICAL = 'medical',
  DONATIONS = 'donations',
  TRANSPORTATIONS = 'transportations',
  RENT = 'rent',
  SUBSCRIPTIONS = 'subscriptions',
  CREDIT = 'credit-card',
  VACATION = 'vacation',
  PERSONAL_CARE = 'personal-care',
  OUTING = 'outing',
  OTHER = 'other',
}
