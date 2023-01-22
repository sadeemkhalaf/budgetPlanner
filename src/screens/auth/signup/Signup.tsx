import React, { FC, useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
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
import { IRootState } from '../../../store/storeConfigs';
import { persistUserRegistration } from '../../../store/actions/appActions';
import { commonStyles } from '../../../theme/commonStyles';
import { authStyles } from '../styles';

const Signup: FC = () => {
  const navigate = useNavigation<any>();
  const dispatch = useDispatch();
  const [passwordVisible, setPasswordVisible] = useState<boolean>(true);
  const { tempUserDetails } = useSelector((state: IRootState) => state.App);

  const { control, handleSubmit, formState: { errors }, getValues } = useForm<FormValues>({
    defaultValues: {
      fullName: tempUserDetails?.fullName || '',
      mobileNumber: tempUserDetails?.mobileNumber || '',
      email: tempUserDetails?.email || '',
      password: tempUserDetails?.password || '',
      confirmPassword: tempUserDetails?.confirmPassword || '',
    }
  });

  const onSubmitForm = (data: FormValues) => {
    dispatch(persistUserRegistration({ ...data }))
    navigate.navigate(AuthRoutesEnums.SignupDone)
  };


  const togglePasswordVisibility = () => setPasswordVisible(prev => !prev)
  const handleGoBack = () => {
    dispatch(persistUserRegistration({}))
    navigate.canGoBack() && navigate.goBack()
  }

  return (
    <Screen
      unsafe={false}
      preset={'full'}
      style={{ paddingHorizontal: scaleByWidth(30) }}
    >
      <LogoHeader />
      <Gap type={'col'} gapValue={24} />
      <View style={[commonStyles.flex, commonStyles.flex1]}>
        <View style={[commonStyles.row]}>
          <Icon
            name={'arrow-left'}
            size={moderateScale(20)}
            color={Colors.black}
            onPress={handleGoBack} />
          <Gap type='row' gapValue={8} />
          <CustomText text={t('Auth.create-account-title')!} preset={'headerBold'} />
        </View>
        <Gap type={'col'} gapValue={16} />
        <View>
          <ConrolledField control={control} name={'fullName'} rules={{ required: true }} placeholder={t('Auth.fullname')!}
            persistTempUser={(value) => {
              dispatch(persistUserRegistration({ ...tempUserDetails, fullName: value }))
            }}
          />
          {errors.fullName && <CustomText preset={'calloutLabel'} style={{ color: Colors.red }} text={t("Errors.required-field")!} />}
          <ConrolledField control={control} name={'mobileNumber'} rules={{ required: true }} placeholder={t('Auth.mobile')!}
            persistTempUser={(value) => {
              dispatch(persistUserRegistration({ ...tempUserDetails, mobileNumber: value }))
            }} />
          {errors.mobileNumber && <CustomText preset={'calloutLabel'} style={{ color: Colors.red }} text={t("Errors.required-field")!} />}
          <ConrolledField control={control} name={'email'} rules={{ required: true }} placeholder={t('Auth.email')!}
            persistTempUser={(value) => {
              dispatch(persistUserRegistration({ ...tempUserDetails, email: value }))
            }} />
          {errors.email && <CustomText preset={'calloutLabel'} style={{ color: Colors.red }} text={t("Errors.required-field")!} />}

          <View style={[commonStyles.flex, commonStyles.row]}>
            <ConrolledField control={control} name={'password'}
              secureTextEntry={passwordVisible}
              rules={{ required: true, minLength: 8 }}
              placeholder={t('Auth.password')!}
              persistTempUser={(value) => {
                dispatch(persistUserRegistration({ ...tempUserDetails, password: value }))
              }} />
            <Icon
              name={passwordVisible ? 'eye' : 'eye-off'}
              size={moderateScale(16)}
              color={Colors.black}
              style={[authStyles.absoluteIcon]}
              onPress={togglePasswordVisibility} />
          </View>
          {errors.password && <CustomText preset={'calloutLabel'} style={{ color: Colors.red }} text={t("Errors.min-length", { count: 8 })!} />}
          <ConrolledField control={control} name={'confirmPassword'}
            secureTextEntry
            rules={{
              required: true,
              minLength: 8
            }}
            placeholder={t('Auth.confirm-password')!}
            persistTempUser={(value) => {
              dispatch(persistUserRegistration({ ...tempUserDetails, confirmPassword: value }))
            }} />
          {(errors.confirmPassword || !getValues('confirmPassword').match(getValues('password'))) && <CustomText preset={'calloutLabel'} style={{ color: Colors.red }} text={t("Errors.password-not-match")!} />}
        </View>

      </View>
      <CustomButton text={t('Auth.create-account')!} onPress={handleSubmit(onSubmitForm)} />
      <Gap type={'col'} gapValue={46} />
    </Screen>
  );
};

export default Signup;
