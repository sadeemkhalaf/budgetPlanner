import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { Provider } from 'react-redux';
import {
  initialWindowMetrics,
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/integration/react';
import AppStack from './routes/AppStack';
import { persistor, reduxStore } from './store/storeConfigs';
import "./i18n/i18n"; 

function App(): JSX.Element {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <SafeAreaView style={{ flex: 1 }} edges={['left', 'right']}>
        <Provider store={reduxStore}>
          <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer>
              <AppStack />
            </NavigationContainer>
          </PersistGate>
        </Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
