import React, { FC, useState } from 'react';
import { View } from 'react-native';
import { t } from 'i18next';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { CustomButton, CustomText, CustomTextField, Gap, Screen } from '../../components';
import { commonStyles } from '../../theme/commonStyles';
import { moderateScale, scaleByWidth } from '../../utils/appUtils';
import { AuthRoutesEnums, HomeRoutesEnums } from '../../routes/route.enums';
import { Colors } from '../../theme/colors';
import { authStyles } from './styles';
import LogoHeader from './LogoHeader';


type FormValues = {
  email: string;
  password: string;
};

const Login: FC = () => {
  const navigate = useNavigation<any>();
  const [passwordVisible, setPasswordVisible] = useState<boolean>(true);
  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: ''
    }
  });
  const onSubmit = (data: FormValues) => {
    console.log('errors: ', errors);
    handleLogin();
  };

  const handleLogin = () => {
    navigate.navigate(HomeRoutesEnums.Home)
  }

  const navigatSignup = () => {
    navigate.navigate(AuthRoutesEnums.Signup)
  }

  const togglePasswordVisibility = () => setPasswordVisible(prev => !prev)

  return (
    <Screen
      unsafe
      preset={'full'}
      style={{ paddingHorizontal: scaleByWidth(30) }}
    >
      <LogoHeader />
      <View style={[commonStyles.flex, commonStyles.flex1, commonStyles.justifyCenter]}>
        <CustomText text={t('Auth.welcome-back')!} preset={'headerBold'} />
        <Gap type={'col'} gapValue={16} />
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          }}
          render={({ field: { onChange, onBlur, value } }: any) => (
            <CustomTextField placeholder={t('Auth.email')!} onBlur={onBlur}
              onChangeText={onChange}
              value={value} />
          )}
          name={"email"}
        />
        {errors.email && <CustomText preset={'calloutLabel'} style={{ color: Colors.red }} text={'Email is required'} />}

        <View style={[commonStyles.flex, commonStyles.row]}>
          <Controller
            control={control}
            rules={{
              required: true,
              minLength: 8
            }}
            render={({ field: { onChange, onBlur, value } }: any) => (
              <CustomTextField placeholder={t('Auth.password')!}
                secureTextEntry={passwordVisible}
                style={[commonStyles.flex1]}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value} />
            )}
            name={"password"}
          />
          <Icon
            name={passwordVisible ? 'eye' : 'eye-off'}
            size={moderateScale(16)}
            color={Colors.black}
            style={[authStyles.absoluteIcon]}
            onPress={togglePasswordVisibility} />
        </View>
        {errors.password && <CustomText preset={'calloutLabel'} style={{ color: Colors.red }} text={'This field min length is 8 characters'} />}

      </View>
      <CustomButton text={t('Auth.login')!} onPress={handleSubmit(onSubmit)} />
      <Gap type={'col'} gapValue={24} />
      <CustomText preset={'bold'} style={{ color: Colors.purple, textAlign: 'center' }} text={t('Auth.signup')!} onPress={navigatSignup} />
      <Gap type={'col'} gapValue={46} />
    </Screen>
  );
};

export default Login;
