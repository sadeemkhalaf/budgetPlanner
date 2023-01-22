import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme/colors';
import {moderateScale, scaleByWidth} from '../../../utils/appUtils';

export const styles = StyleSheet.create({
  absoluteIcon: {
    position: 'absolute',
    right: moderateScale(32),
    zIndex: 1000,
  },
  searchbox: {
    backgroundColor: Colors.layout,
    borderRadius: moderateScale(8),
  },
  expenseRow: {
    backgroundColor: Colors.mainGrey,
    paddingHorizontal: scaleByWidth(16),
    paddingVertical: scaleByWidth(18),
    borderRadius: moderateScale(13),
  },
});
