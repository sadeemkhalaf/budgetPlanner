import React from 'react';
import { View } from 'react-native';
import { t } from 'i18next';
import { useSelector } from 'react-redux';
import { CustomText, Gap, LogoHeader, Screen } from '../../../components';
import { scaleByWidth } from '../../../utils/appUtils';
import { SettingsList } from './SettingsList';
import { Colors } from '../../../theme/colors';
import { IRootState } from '../../../store/storeConfigs';
import { commonStyles } from '../../../theme/commonStyles';
import { styles } from './styles';

const More = () => {
  const { langType } = useSelector((state: IRootState) => state.App);
  const { userDetails } = useSelector((state: IRootState) => state.User);

  return (
    <Screen
      unsafe
      preset={'scroll'}
      style={{ paddingHorizontal: scaleByWidth(30) }}
    >
      <Gap type={'col'} gapValue={64} />
      <LogoHeader />
      <Gap type={'col'} gapValue={32} />
      <CustomText text={t('More.hello')!} preset={'largeHeaderBold'} style={[{ color: Colors.primary }, commonStyles.alignStart, langType === 'ar' && { textAlign: 'left' }]} />
      <CustomText text={userDetails?.fullName} preset={'header'} style={[{ color: Colors.black }, commonStyles.alignStart, langType === 'ar' && { textAlign: 'left' }]} />
      <Gap type={'col'} gapValue={32} />

      {/* personal contact details */}
      <View style={[styles.detailsBox, commonStyles.flex, commonStyles.alignStart]}>
        <CustomText text={t('More.contact-details')!} preset={'subheaderBold'} style={{ color: Colors.black }} />
        <Gap type={'col'} gapValue={24} />
        <CustomText text={t('Auth.email')!} preset={'bold'} style={{ color: Colors.purple }} />
        <CustomText text={userDetails?.email} preset={'default'} style={{ color: Colors.black, letterSpacing: 1 }} />
        <Gap type={'col'} gapValue={16} />
        <CustomText text={t('Auth.mobile')!} preset={'bold'} style={{ color: Colors.purple }} />
        <CustomText text={userDetails?.mobileNumber} preset={'default'} style={{ color: Colors.black, letterSpacing: 1 }} />
      </View>

      {/* settings */}
      <SettingsList />

    </Screen>
  );
};

export default More;
