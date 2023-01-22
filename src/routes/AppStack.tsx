import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import i18next from 'i18next';
import { I18nManager } from 'react-native';
import RnRestart from 'react-native-restart';
import { AuthRoutesEnums, HomeRoutesEnums } from './route.enums';
import Splash from '../screens/splash/Splash';
import HomeStack from './HomeStack';
import AuthStack from './AuthStack';
import { IRootState } from '../store/storeConfigs';

const AppStack = () => {
  const Stack = createNativeStackNavigator();
  const { token } = useSelector((state: IRootState) => state.User);
  const { langType } = useSelector((state: IRootState) => state.App);

  const handleUpdateLayout = () => {
    i18next.changeLanguage(langType);
    if (langType === 'ar') {
      I18nManager.allowRTL(true);
      I18nManager.forceRTL(true);
    } else {
      if (I18nManager.isRTL) {
        setTimeout(() => {
          RnRestart.Restart();
        }, 150);
      }
      I18nManager.forceRTL(false);
      I18nManager.allowRTL(false);
    }
  };

  useEffect(() => {
    handleUpdateLayout();
  }, [langType]);


  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
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
