import {ViewStyle, TextStyle} from 'react-native';
import {Colors} from '../../theme/colors';
import {moderateScale} from '../../utils/appUtils';

/**
 * All text will start off looking like this.
 */
const BASE_VIEW: ViewStyle = {
  paddingVertical: moderateScale(4),
  paddingHorizontal: moderateScale(4),
  borderRadius: moderateScale(4),
  justifyContent: 'center',
  alignItems: 'center',
};

const BASE_TEXT: TextStyle = {
  paddingHorizontal: moderateScale(8),
};

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const viewPresets: Record<string, ViewStyle> = {
  /**
   * A smaller piece of secondard information.
   */
  primary: {
    ...BASE_VIEW,
    backgroundColor: Colors.purple,
    borderRadius: moderateScale(8),
  } as ViewStyle,

  /**
   * A button without extras.
   */
  link: {
    ...BASE_VIEW,
    paddingHorizontal: 0,
    paddingVertical: 0,
    alignItems: 'flex-start',
  } as ViewStyle,
};

export const textPresets: Record<ButtonPresetNames, TextStyle> = {
  primary: {
    ...BASE_TEXT,
    fontSize: moderateScale(9),
    color: Colors.white,
  } as TextStyle,
  buttonText: {
    ...BASE_TEXT,
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: Colors.white,
  } as TextStyle,
  link: {
    ...BASE_TEXT,
    color: Colors.white,
    paddingHorizontal: 0,
    paddingVertical: 0,
  } as TextStyle,
};

/**
 * A list of preset names.
 */
export type ButtonPresetNames = keyof typeof viewPresets;
