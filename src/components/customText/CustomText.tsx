import * as React from 'react';
import {Text as ReactNativeText} from 'react-native';
import {CustomTextPresets} from './customText.presets';
import {CustomTextProps} from './customText.props';

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function CustomText(props: CustomTextProps) {
  // grab the props
  const {
    preset = 'default',
    text,
    children,
    style: styleOverride,
    ...rest
  } = props;

  // figure out which content to use
  const content = text || children;

  const style = CustomTextPresets[preset] || CustomTextPresets.default;
  const styles = [style, styleOverride];

  return (
    <ReactNativeText {...rest} style={styles}>
      {content}
    </ReactNativeText>
  );
}
