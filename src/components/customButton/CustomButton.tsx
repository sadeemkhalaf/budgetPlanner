import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {CustomText} from '../customText/CustomText';
import {textPresets, viewPresets} from './customButton.presets';
import {CustomButtonProps} from './customeButton.props';

export const CustomButton = (props: CustomButtonProps) => {
  const {
    text,
    style: styleOverride,
    textStyle: textStyleOverride,
    children,
    height = 56,
    ...rest
  } = props;

  const viewStyle = viewPresets.primary;
  const viewStyles = [viewStyle, styleOverride];
  const textStyle = textPresets.buttonText;
  const textStyles = [textStyle, textStyleOverride];

  const content = children || <CustomText text={text} style={textStyles} />;

  return (
    <TouchableOpacity style={[viewStyles, {height: height}]} {...rest}>
      {content}
    </TouchableOpacity>
  );
};
