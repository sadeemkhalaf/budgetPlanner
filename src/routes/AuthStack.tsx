import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/auth/Login';
import Signup from '../screens/auth/signup/Signup';
import {AuthRoutesEnums} from './route.enums';
import SignupDone from '../screens/auth/signup/SignupDone';

const AuthStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={AuthRoutesEnums.Login} component={Login} />
      <Stack.Screen name={AuthRoutesEnums.Signup} component={Signup} />
      <Stack.Screen name={AuthRoutesEnums.SignupDone} component={SignupDone} />
    </Stack.Navigator>
  );
};

export default AuthStack;
