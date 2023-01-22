import React, { FC, useCallback, useEffect } from 'react';
import { Image, ImageRequireSource, View } from 'react-native';
import {useSelector} from 'react-redux';
import {StackActions, useNavigation} from '@react-navigation/native';
import {HomeRoutesEnums, AuthRoutesEnums} from './../../routes/route.enums';
import {IRootState} from '../../store/storeConfigs';
import {styles} from './styles';

const logo = require('./../../../assets/imgs/logo.png') as ImageRequireSource;

const Splash: FC = () => {
  const navigation = useNavigation<any>();
  const { token } = useSelector((state: IRootState) => state?.User);

  const handleNavigation = useCallback(() => {
    try {
      // TODO: fix after you're done
      if (token.length) {
        navigation.navigate(HomeRoutesEnums.Home, {
          screen: HomeRoutesEnums.Dashboard,
        });
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
      <Image source={logo} style={[styles.splashIcon]} resizeMode={'contain'} />
    </View>
  );
};

export default Splash;
