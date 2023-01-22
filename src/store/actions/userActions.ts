import {ExpenseDetails} from '../../screens/home/dashbaord/expensesList/expensesList.props';
import {IUserDetails} from '../../utils/types';
import {UserActionsType} from '../types/redux.enums';

export const AppActions = {
  SET_TOKEN: UserActionsType.SET_TOKEN,
  USER_DETAILS: UserActionsType.USER_DETAILS,
};

export const setToken = (token: string) => {
  return {
    type: UserActionsType.SET_TOKEN,
    payload: token,
  };
};

export const setUserDetails = (userDetails: IUserDetails) => {
  return {
    type: UserActionsType.SET_TOKEN,
    payload: userDetails,
  };
};

export const setUserExpenses = (userExpenses: ExpenseDetails) => {
  return {
    type: UserActionsType.SET_USER_EXPENSES,
    payload: userExpenses,
  };
};
