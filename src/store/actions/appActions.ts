import {AppActionsType} from '../types/redux.enums';

export const AppActions = {
  CHANGE_LANG_TYPE: AppActionsType.CHANGE_LANG_TYPE,
};

export const changeLangType = (langType: string) => {
  return {
    type: AppActions.CHANGE_LANG_TYPE,
    payload: langType,
  };
};
