import {ITempUserDetails} from '../../utils/types';
import {AppActionsType} from '../types/redux.enums';

export const AppActions = {
  CHANGE_LANG_TYPE: AppActionsType.CHANGE_LANG_TYPE,
  TEMP_USER_REGISTRATION: AppActionsType.TEMP_USER_REGISTRATION,
};

export const changeLangType = (langType: string) => {
  return {
    type: AppActions.CHANGE_LANG_TYPE,
    payload: langType,
  };
};

export const persistUserRegistration = (tempUserDetails: ITempUserDetails) => {
  return {
    type: AppActions.TEMP_USER_REGISTRATION,
    payload: tempUserDetails,
  };
};
