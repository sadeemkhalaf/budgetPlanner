import React, { useState } from 'react';
import {
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { CustomText } from '../customText/CustomText';
import { Colors } from '../../theme/colors';
import { moderateScale, scaleByHeight } from '../../utils/appUtils';
import { CustomTextFieldProps } from './customTextField.props';
import { PRESETS } from './customTextField.presets';

// the base styling for the container
const CONTAINER: ViewStyle = {
  paddingBottom: scaleByHeight(12),
};

// the base styling for the TextInput
const INPUT: TextStyle = {
  color: Colors.black,
  height: scaleByHeight(42),
  fontSize: moderateScale(16),
  backgroundColor: 'transparent',
  borderBottomColor: Colors.black,
  borderBottomWidth: moderateScale(1),
  paddingHorizontal: moderateScale(16),
};

const focusedInput: ViewStyle = {
  borderBottomColor: Colors.purple,
};

export function CustomTextField(props: CustomTextFieldProps) {
  const {
    placeholder = '',
    label,
    preset = 'default',
    style: styleOverride,
    inputStyle: inputStyleOverride,
    forwardedRef,
    ...rest
  } = props;

  const containerStyles = [CONTAINER, PRESETS[preset], styleOverride];
  const inputStyles = [INPUT, inputStyleOverride];

  const [focused, setFocused] = useState(false);

  const handleFocus = (current: any) => {
    setFocused(current);
  };

  return (
    <View style={containerStyles}>
      <CustomText preset="fieldLabel" text={label} />
      <TextInput
        autoCapitalize={'none'}
        onFocus={() => handleFocus(true)}
        onBlur={() => handleFocus(false)}
        placeholder={placeholder}
        placeholderTextColor={Colors.grey}
        underlineColorAndroid={'transparent'}
        {...rest}
        style={[inputStyles, focused && { ...focusedInput }]}
        ref={forwardedRef}
      />
    </View>
  );
}
