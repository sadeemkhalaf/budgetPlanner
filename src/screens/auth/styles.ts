import {StyleSheet} from 'react-native';
import {scaleByWidth} from '../../utils/appUtils';

export const authStyles = StyleSheet.create({
  absoluteIcon: {
    position: 'absolute',
    right: 0,
  },
  headerLogo: {
    width: scaleByWidth(50),
  },
});
