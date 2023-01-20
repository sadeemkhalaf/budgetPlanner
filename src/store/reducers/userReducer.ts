import {UserAction} from '../types/actions.type';
import {UserActionsType} from '../types/redux.enums';
import {IinitialStateUser} from '../types/redux.types';

const initialState: IinitialStateUser = {
  userDetails: {},
  token: '',
};

const appReducer = (
  State: IinitialStateUser = initialState,
  action: UserAction,
) => {
  switch (action.type) {
    case UserActionsType.SET_TOKEN:
      return {
        ...State,
        token: action.payload,
      };
    case UserActionsType.USER_DETAILS:
      return {
        ...State,
        ...action.payload,
      };
    default:
      return State;
  }
};

export default appReducer;
