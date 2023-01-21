import {ExpenseEnums} from '../expenseRow/expense.type';

export interface ExpenseDetails {
  id: string;
  title: ExpenseEnums;
  amount: number;
  createdOn: string;
}

export const testData: ExpenseDetails[] = [
  {
    amount: 40,
    id: '99389',
    createdOn: new Date().toDateString(),
    title: ExpenseEnums.CREDIT,
  },
  {
    amount: 10,
    id: '99322',
    createdOn: new Date().toDateString(),
    title: ExpenseEnums.PERSONAL_CARE,
  },
  {
    amount: 15,
    id: '09038',
    createdOn: new Date().toDateString(),
    title: ExpenseEnums.DONATIONS,
  },
  {
    amount: 22,
    id: '96789',
    createdOn: new Date().toDateString(),
    title: ExpenseEnums.OTHER,
  },
];

export interface ExpensesListProps {
  expensesList: ExpenseDetails[];
}
