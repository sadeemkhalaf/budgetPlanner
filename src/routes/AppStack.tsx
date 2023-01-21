import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {AuthRoutesEnums, HomeRoutesEnums} from './route.enums';
import Splash from '../screens/splash/Splash';
import HomeStack from './HomeStack';
import AuthStack from './AuthStack';
import {IRootState} from '../store/storeConfigs';

const AppStack = () => {
  const Stack = createNativeStackNavigator();
  const {token} = useSelector((state: IRootState) => state.User);

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={HomeRoutesEnums.Splash}
    >
      <Stack.Screen name={HomeRoutesEnums.Splash} component={Splash} />
      {!token.length ? (
        <Stack.Screen name={AuthRoutesEnums.AuthStack} component={AuthStack} />
      ) : null}

      <Stack.Screen name={HomeRoutesEnums.Home} component={HomeStack} />
    </Stack.Navigator>
  );
};

export default AppStack;
