import React, {useCallback, useEffect} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {StackActions, useNavigation} from '@react-navigation/native';
import {HomeRoutesEnums, AuthRoutesEnums} from './../../routes/route.enums';
import {IRootState} from '../../store/storeConfigs';
import {styles} from './styles';

const Splash = () => {
  const navigation = useNavigation();
  const {token} = useSelector((state: IRootState) => state?.App);

  const handleNavigation = useCallback(() => {
    try {
      if (token.length) {
        navigation.dispatch(StackActions.replace(HomeRoutesEnums.Home));
      } else {
        navigation.dispatch(StackActions.replace(AuthRoutesEnums.AuthStack));
      }
    } catch (error) {
      navigation.dispatch(StackActions.replace(AuthRoutesEnums.AuthStack));
    }
  }, [navigation, token]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNavigation();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [handleNavigation]);

  return (
    <View style={[styles.container]}>
      <View style={[styles.splashIcon]} />
    </View>
  );
};

export default Splash;
