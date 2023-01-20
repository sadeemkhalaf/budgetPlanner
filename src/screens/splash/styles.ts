import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../theme/colors';

export const styles = StyleSheet.create({
  splashImg: {
    width: '100%',
    height: '100%',
  },
  splashIcon: {
    width: Dimensions.get('screen').width / 2,
    height: Dimensions.get('screen').width / 2,
    zIndex: 1000,
    backgroundColor: Colors.primary,
    borderRadius: Dimensions.get('screen').width / 2,
  },
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightGrey,
  },
});
