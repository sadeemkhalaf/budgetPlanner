import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import { t } from 'i18next';
import { HomeRoutesEnums } from './route.enums';
import Dashboard from '../screens/home/dashbaord/Dashboard';
import More from '../screens/home/more/More';
import { Colors } from '../theme/colors';

const HomeStack = () => {
  const Stack = createBottomTabNavigator();

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, tabBarActiveTintColor: Colors.purple }}
      initialRouteName={HomeRoutesEnums.Dashboard}
    >
      <Stack.Screen name={HomeRoutesEnums.Dashboard} component={Dashboard}
        options={{
          tabBarIcon: ({ color, focused, size }) => (<Icon
            name={'activity'}
            size={size}
            color={!focused ? color : Colors.purple} />),
          title: t('Dashboard.dashboard')!
        }} />
      <Stack.Screen name={HomeRoutesEnums.More} component={More}
        options={{
          tabBarIcon: ({ color, focused, size }) => (<Icon
            name={'menu'}
            size={size}
            color={!focused ? color : Colors.purple} />),
          title: t('Dashboard.more')!,
        }} />
    </Stack.Navigator>
  );
};

export default HomeStack;
