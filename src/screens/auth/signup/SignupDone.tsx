import React from 'react';
import { View } from 'react-native';
import { t } from 'i18next';
import Icon from 'react-native-vector-icons/Feather';
import { StackActions, useNavigation } from '@react-navigation/native';
import { CustomButton, CustomText, Gap, Screen } from '../../../components';
import { commonStyles } from '../../../theme/commonStyles';
import { moderateScale, scaleByWidth } from '../../../utils/appUtils';
import { Colors } from '../../../theme/colors';
import { HomeRoutesEnums } from '../../../routes/route.enums';

const SignupDone = () => {
  const navigate = useNavigation();

  const handleNavigateToDashboard = () => {
    navigate.dispatch(StackActions.replace(HomeRoutesEnums.Home, { screen: HomeRoutesEnums.Dashboard }))
  }

  return (
    <Screen
      unsafe={false}
      preset={'full'}
      style={{ paddingHorizontal: scaleByWidth(30) }}
    >
      <View style={[commonStyles.flex, commonStyles.flex1, commonStyles.justifyCenter, commonStyles.alignItems]}>
        <Icon
          name={'check'}
          size={moderateScale(36)}
          color={Colors.green} />
        <Gap type={'col'} gapValue={24} />
        <CustomText text={t('Auth.congratulations')!} preset={'headerBold'} />
        <CustomText text={t('Auth.account-ready')!} preset={'screenHeader'} />
      </View>
      <CustomButton text={t('Auth.start')!} onPress={handleNavigateToDashboard} />
      <Gap type={'col'} gapValue={46} />
    </Screen>
  );
};

export default SignupDone;
