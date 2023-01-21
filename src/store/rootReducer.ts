import {combineReducers} from 'redux';
import appReducer from './reducers/appReducer';
import userReducer from './reducers/userReducer';

export const RootReducer = combineReducers({
  App: appReducer,
  User: userReducer,
});
