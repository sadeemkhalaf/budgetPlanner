import {ExpenseDetails} from '../../screens/home/dashbaord/expensesList/expensesList.props';
import {IUserDetails} from '../../utils/types';

export interface IinitialStateApp {
  langType: 'en' | 'ar';
}

export interface IinitialStateUser {
  userDetails: IUserDetails;
  userExpensesList: ExpenseDetails[];
  token: string;
}
