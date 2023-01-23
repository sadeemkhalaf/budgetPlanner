import {
  ExpenseDetails,
  ITempUserDetails,
  IUserDetails,
} from '../../utils/types';

export interface InitialStateApp {
  langType: 'en' | 'ar';
  tempUserDetails: ITempUserDetails;
}

export interface InitialStateUser {
  userDetails: IUserDetails;
  userExpensesList: ExpenseDetails[];
  token: string;
}
