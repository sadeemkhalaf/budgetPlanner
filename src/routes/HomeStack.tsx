import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeRoutesEnums} from './route.enums';
import Dashboard from '../screens/home/dashbaord/Dashboard';
import More from '../screens/home/more/More';

const HomeStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={HomeRoutesEnums.Dashboard} component={Dashboard} />
      <Stack.Screen name={HomeRoutesEnums.More} component={More} />
    </Stack.Navigator>
  );
};

export default HomeStack;
