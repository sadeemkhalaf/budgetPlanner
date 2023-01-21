import {StyleProp, TextProps as TextProperties, TextStyle} from 'react-native';
import {TextPresets} from './customText.presets';

export interface CustomTextProps extends TextProperties {
  children?: React.ReactNode;
  text?: string;
  style?: StyleProp<TextStyle>;
  preset?: TextPresets;
}
