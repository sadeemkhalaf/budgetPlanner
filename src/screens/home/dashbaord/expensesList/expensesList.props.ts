import {ExpenseDetails, ExpenseEnums} from '../../../../utils/types';

export const testData: ExpenseDetails[] = [
  {
    amount: 40,
    id: '99389',
    createdOn: new Date().toISOString(),
    title: ExpenseEnums.CREDIT,
  },
  {
    amount: 40,
    id: '99389',
    createdOn: '2023-01-08T23:27:31.476Z',
    title: ExpenseEnums.PERSONAL_CARE,
  },
  {
    amount: 40,
    id: '99389',
    createdOn: '2023-01-08T23:27:31.476Z',
    title: ExpenseEnums.MEDICAL,
  },
  {
    amount: 10,
    id: '99322',
    createdOn: '2023-01-08T23:27:31.476Z',
    title: ExpenseEnums.PERSONAL_CARE,
  },
  {
    amount: 15,
    id: '09038',
    createdOn: new Date().toISOString(),
    title: ExpenseEnums.DONATIONS,
  },
  {
    amount: 22,
    id: '96789',
    createdOn: '2022-12-30T23:27:31.476Z',
    title: ExpenseEnums.OTHER,
  },
];
