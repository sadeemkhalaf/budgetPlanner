import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';
import {
  moderateScale,
  scaleByHeight,
  scaleByWidth,
  screenWidth,
} from '../../utils/appUtils';

export const styles = StyleSheet.create({
  view: {
    justifyContent: 'flex-end',
    margin: 0,
    height: scaleByHeight(300),
  },
  modalContainer: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  handlerStyle: {
    position: 'absolute',
    right: '50%',
    left: '50%',
    top: scaleByHeight(12),
    height: scaleByHeight(6),
    width: scaleByWidth(50),
    backgroundColor: Colors.purple,
    borderRadius: moderateScale(25),
  },
  modalInnerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: screenWidth - moderateScale(60),
    marginHorizontal: scaleByWidth(30),
    borderRadius: moderateScale(20),
    paddingHorizontal: scaleByWidth(30),
  },
});
