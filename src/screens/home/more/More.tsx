import React from 'react';
import { View } from 'react-native';
import { t } from 'i18next';
import { CustomText, Gap, LogoHeader, Screen } from '../../../components';
import { scaleByWidth } from '../../../utils/appUtils';
import { SettingsList } from './SettingsList';
import { Colors } from '../../../theme/colors';
import { styles } from './styles';

const More = () => {

  return (
    <Screen
      unsafe
      preset={'scroll'}
      style={{ paddingHorizontal: scaleByWidth(30) }}
    >
      <Gap type={'col'} gapValue={64} />
      <LogoHeader />
      <Gap type={'col'} gapValue={32} />
      <CustomText text={t('More.hello')!} preset={'largeHeaderBold'} style={{ color: Colors.primary }} />
      <CustomText text={'Sadeem Khalaf'} preset={'header'} style={{ color: Colors.black }} />
      <Gap type={'col'} gapValue={32} />

      <View style={[styles.detailsBox]}>
        <CustomText text={t('More.contact-details')!} preset={'subheaderBold'} style={{ color: Colors.black }} />
        <Gap type={'col'} gapValue={24} />
        <CustomText text={t('Auth.email')!} preset={'bold'} style={{ color: Colors.purple }} />
        <CustomText text={'sadeem.kh992@gmail.com'} preset={'default'} style={{ color: Colors.black, letterSpacing: 1 }} />
        <Gap type={'col'} gapValue={16} />
        <CustomText text={t('Auth.mobile')!} preset={'bold'} style={{ color: Colors.purple }} />
        <CustomText text={'+962775132192'} preset={'default'} style={{ color: Colors.black, letterSpacing: 1 }} />
      </View>

      {/* settings */}
      <Gap type={'col'} gapValue={32} />
      <CustomText text={t('More.settings')!} preset={'subheaderBold'} style={{ color: Colors.black }} />
      <Gap type={'col'} gapValue={24} />
      <SettingsList />

    </Screen>
  );
};

export default More;
