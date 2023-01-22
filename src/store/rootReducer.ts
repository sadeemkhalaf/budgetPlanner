import {combineReducers} from 'redux';
import appReducer from './reducers/appReducer';
import userReducer from './reducers/userReducer';

export const RootReducer = combineReducers({
  User: userReducer,
  App: appReducer,
});
