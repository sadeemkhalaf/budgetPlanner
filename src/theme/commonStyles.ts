import {StyleSheet} from 'react-native';
import {scaleByWidth} from '../utils/appUtils';

export const commonStyles = StyleSheet.create({
  ph30: {
    paddingHorizontal: scaleByWidth(30),
  },
  flex1: {
    flex: 1,
  },
  flex: {
    display: 'flex',
  },
  w100: {
    width: '100%',
  },
  w75: {
    width: '75%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  spaceAround: {
    justifyContent: 'space-around',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  alignItems: {
    alignItems: 'center',
  },
});
