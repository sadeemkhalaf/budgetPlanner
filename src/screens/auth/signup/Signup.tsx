import React, { FC, useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { t } from 'i18next';
import { useForm } from 'react-hook-form';
import Icon from 'react-native-vector-icons/Feather';
import { CustomText, Gap, CustomButton, Screen, LogoHeader } from '../../../components';
import { AuthRoutesEnums } from '../../../routes/route.enums';
import { scaleByWidth, moderateScale } from '../../../utils/appUtils';
import { ConrolledField } from './controlledField/ControlledField';
import { Colors } from '../../../theme/colors';
import { FormValues } from './controlledField/form.type';
import { commonStyles } from '../../../theme/commonStyles';
import { authStyles } from '../styles';

const Signup: FC = () => {
  const navigate = useNavigation<any>();
  const [passwordVisible, setPasswordVisible] = useState<boolean>(true);

  const { control, handleSubmit, formState: { errors }, getValues } = useForm<FormValues>({
    defaultValues: {
      fullname: '',
      mobileNumber: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  });

  const onSubmit = (data: FormValues) => {
    handleSignup();
  };

  const handleSignup = () => {
    navigate.navigate(AuthRoutesEnums.SignupDone)
  }

  const togglePasswordVisibility = () => setPasswordVisible(prev => !prev)

  return (
    <Screen
      unsafe
      preset={'full'}
      style={{ paddingHorizontal: scaleByWidth(30) }}
    >
      <LogoHeader />
      <View style={[commonStyles.flex, commonStyles.flex1]}>
        <View style={[commonStyles.row]}>
          <Icon
            name={'arrow-left'}
            size={moderateScale(20)}
            color={Colors.black}
            onPress={() => navigate.canGoBack() && navigate.goBack()} />
          <Gap type='row' gapValue={8} />
          <CustomText text={t('Auth.create-account-title')!} preset={'headerBold'} />
        </View>
        <Gap type={'col'} gapValue={16} />
        <View>
          <ConrolledField control={control} name={'fullname'} rules={{ required: true }} placeholder={t('Auth.fullname')!} />
          {errors.fullname && <CustomText preset={'calloutLabel'} style={{ color: Colors.red }} text={'Full name is required'} />}
          <ConrolledField control={control} name={'mobileNumber'} rules={{ required: true }} placeholder={t('Auth.mobile')!} />
          {errors.mobileNumber && <CustomText preset={'calloutLabel'} style={{ color: Colors.red }} text={'Mobile number is required'} />}
          <ConrolledField control={control} name={'email'} rules={{ required: true }} placeholder={t('Auth.email')!} />
          {errors.email && <CustomText preset={'calloutLabel'} style={{ color: Colors.red }} text={'Email is required'} />}

          <View style={[commonStyles.flex, commonStyles.row]}>
            <ConrolledField control={control} name={'password'}
              secureTextEntry={passwordVisible}
              rules={{ required: true, minLength: 8 }}
              placeholder={t('Auth.password')!} />
            <Icon
              name={passwordVisible ? 'eye' : 'eye-off'}
              size={moderateScale(16)}
              color={Colors.black}
              style={[authStyles.absoluteIcon]}
              onPress={togglePasswordVisibility} />
          </View>
          {errors.password && <CustomText preset={'calloutLabel'} style={{ color: Colors.red }} text={'This field min length is 8 characters'} />}
          <ConrolledField control={control} name={'confirmPassword'}
            secureTextEntry
            rules={{
              required: true,
              minLength: 8
            }}
            placeholder={t('Auth.confirm-password')!} />
          {(errors.confirmPassword || !getValues('confirmPassword').match(getValues('password'))) && <CustomText preset={'calloutLabel'} style={{ color: Colors.red }} text={'This field must match password'} />}
        </View>

      </View>
      <CustomButton text={t('Auth.create-account')!} onPress={handleSubmit(onSubmit)} />
      <Gap type={'col'} gapValue={46} />
    </Screen>
  );
};

export default Signup;
