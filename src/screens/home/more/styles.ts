import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme/colors';
import {moderateScale, scaleByHeight} from '../../../utils/appUtils';

export const styles = StyleSheet.create({
  detailsBox: {
    backgroundColor: Colors.mainGrey,
    padding: moderateScale(24),
    borderRadius: moderateScale(13),
  },
  bottomBorder: {
    borderBottomWidth: 1,
    paddingVertical: scaleByHeight(16),
    borderBottomColor: Colors.lightGrey,
  },
});
