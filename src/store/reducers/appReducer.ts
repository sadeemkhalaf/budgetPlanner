import {AppActions} from '../actions/appActions';
import {AppAction} from '../types/actions.type';
import {IinitialStateApp} from '../types/redux.types';

const initialState: IinitialStateApp = {
  langType: 'en',
};

const appReducer = (
  State: IinitialStateApp = initialState,
  action: AppAction,
) => {
  switch (action.type) {
    case AppActions.CHANGE_LANG_TYPE:
      return {
        ...State,
        langType: action.payload,
      };
    default:
      return State;
  }
};

export default appReducer;
