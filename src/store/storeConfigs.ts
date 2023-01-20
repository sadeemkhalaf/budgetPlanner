import {Action, CombinedState, compose, createStore, Reducer} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {RootReducer} from './rootReducer';
import {IinitialStateUser} from './types/redux.types';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}

const persistConfig = {
  key: 'budgetStore',
  stateReconciler: autoMergeLevel2,
  storage: AsyncStorage,
  version: 2,
};

const composeWithDevTools = compose(
  typeof window?.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
    ? window?.__REDUX_DEVTOOLS_EXTENSION__()
    : (f: any) => f,
);

type rootState = ReturnType<typeof RootReducer>;
const persistedReducer = persistReducer<rootState>(
  persistConfig,
  RootReducer as Reducer<
    CombinedState<{App: IinitialStateUser; User: IinitialStateUser}>,
    Action<any>
  >,
);

export const reduxStore = createStore(persistedReducer, composeWithDevTools);

export const persistor = persistStore(reduxStore);

export type IRootState = ReturnType<typeof reduxStore.getState>;
