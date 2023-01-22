import {StyleSheet} from 'react-native';
import {scaleByHeight, scaleByWidth} from '../../utils/appUtils';

export const authStyles = StyleSheet.create({
  absoluteIcon: {
    position: 'absolute',
    right: 0,
  },
  headerLogo: {
    width: scaleByWidth(50),
    height: scaleByHeight(30),
  },
});
