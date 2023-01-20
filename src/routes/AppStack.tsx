import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthRoutesEnums, HomeRoutesEnums} from './route.enums';
import Splash from '../screens/splash/Splash';
import HomeStack from './HomeStack';
import AuthStack from './AuthStack';

const AppStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={HomeRoutesEnums.Splash} component={Splash} />
      <Stack.Screen name={AuthRoutesEnums.AuthStack} component={AuthStack} />
      <Stack.Screen name={HomeRoutesEnums.Home} component={HomeStack} />
    </Stack.Navigator>
  );
};

export default AppStack;
