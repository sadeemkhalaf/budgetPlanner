import {AppAction} from '../types/actions.type';
import {AppActionsType} from '../types/redux.enums';
import {InitialStateApp} from '../types/redux.types';

const initialState: InitialStateApp | undefined = {
  langType: 'en',
  tempUserDetails: {},
};

const appReducer = (
  State: InitialStateApp = initialState,
  action: AppAction,
) => {
  switch (action.type) {
    case AppActionsType.CHANGE_LANG_TYPE:
      return {
        ...State,
        langType: action.payload,
      };
    case AppActionsType.TEMP_USER_REGISTRATION:
      return {
        ...State,
        tempUserDetails: {...action.payload},
      };
    default:
      return State;
  }
};

export default appReducer;
