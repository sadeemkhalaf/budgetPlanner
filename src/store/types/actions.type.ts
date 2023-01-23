import {
  ExpenseDetails,
  ITempUserDetails,
  IUserDetails,
} from '../../utils/types';
import {AppActionsType, UserActionsType} from './redux.enums';

export interface IChangeLanguageType {
  type: AppActionsType.CHANGE_LANG_TYPE;
  payload: 'ar' | 'en';
}

export interface ISetTempUserRegistration {
  type: AppActionsType.TEMP_USER_REGISTRATION;
  payload: ITempUserDetails;
}

export interface ISetToken {
  type: UserActionsType.SET_TOKEN;
  payload: string;
}

export interface ISetUserDetails {
  type: UserActionsType.USER_DETAILS;
  payload: IUserDetails;
}

export interface ISetUserExpenses {
  type: UserActionsType.SET_USER_EXPENSES;
  payload: ExpenseDetails;
}

export type AppAction = IChangeLanguageType | ISetTempUserRegistration;
export type UserAction = ISetToken | ISetUserDetails | ISetUserExpenses;
