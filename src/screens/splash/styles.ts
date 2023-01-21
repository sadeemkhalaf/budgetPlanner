import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../theme/colors';
import {scaleByHeight} from '../../utils/appUtils';

export const styles = StyleSheet.create({
  splashImg: {
    width: '100%',
    height: '100%',
  },
  splashIcon: {
    height: scaleByHeight(90),
    width: Dimensions.get('screen').width / 1.75,
    zIndex: 1000,
  },
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightGrey,
  },
});
