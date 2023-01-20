import {IUserDetails} from '../../utils/types';
import {AppActionsType, UserActionsType} from './redux.enums';

export interface IChangeLanguageType {
  type: AppActionsType.CHANGE_LANG_TYPE;
  payload: 'ar' | 'en';
}

export interface ISetToken {
  type: UserActionsType.SET_TOKEN;
  payload: string;
}

export interface ISetUserDetails {
  type: UserActionsType.USER_DETAILS;
  payload: IUserDetails;
}

export type AppAction = IChangeLanguageType;
export type UserAction = ISetToken | ISetUserDetails;
