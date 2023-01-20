import {combineReducers} from 'redux';
import appReducer from './reducers/userReducer';
import userReducer from './reducers/userReducer';

export const RootReducer = combineReducers({
  App: appReducer,
  User: userReducer,
});
