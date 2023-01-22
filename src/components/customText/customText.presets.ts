import {TextStyle} from 'react-native';
import {Colors} from '../../theme/colors';
import {moderateScale} from '../../utils/appUtils';

/**
 * All text will start off looking like this.
 */
const HEADER: TextStyle = {
  color: Colors.black,
  fontSize: moderateScale(32),
};

/**
 * All text will start off looking like this.
 */
const BASE: TextStyle = {
  color: Colors.black,
  fontSize: moderateScale(16),
};

/**
 * Bold
 * */
const BOLD: TextStyle = {
  color: Colors.black,
  fontSize: moderateScale(15),
  fontWeight: 'bold',
};

/**
 * Field Text style
 * */
const FIELD: TextStyle = {
  color: Colors.black,
  fontSize: moderateScale(12),
};

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const CustomTextPresets = {
  /**
   * The default text styles.
   */
  default: BASE,

  /**
   * A header bold version of the default text.
   */
  headerBold: {...BOLD, fontSize: moderateScale(24)} as TextStyle,

  /**
   * A Large header bold version of the default text.
   */
  largeHeaderBold: {...BOLD, fontSize: moderateScale(32)} as TextStyle,

  /**
   * A header bold version of the default text.
   */
  subheaderBold: {...BOLD, fontSize: moderateScale(20)} as TextStyle,

  /**
   * A bold version of the default text.
   */
  bold: {...BOLD} as TextStyle,

  /**
   * Large headers.
   */
  header: {
    ...HEADER,
    fontSize: moderateScale(24),
    color: Colors.black,
  } as TextStyle,

  /**
   * Large headers.
   */
  screenHeader: {
    ...HEADER,
    fontSize: moderateScale(20),
    color: Colors.black,
  } as TextStyle,

  /**
   * Action labels that appear on action sheet.
   */
  actionLabel: {
    ...BASE,
    fontSize: moderateScale(14),
    color: Colors.black,
  } as TextStyle,

  /**
   * Field labels that appear on forms above the inputs.
   */
  fieldLabel: {
    ...BASE,
    fontSize: moderateScale(12),
    color: Colors.black,
  } as TextStyle,

  fieldText: {
    ...FIELD,
    fontSize: moderateScale(14),
    color: Colors.black,
  } as TextStyle,

  /**
   * Field labels that appear on forms above the inputs.
   */
  fieldPlaceholder: {
    ...BASE,
    fontSize: moderateScale(14),
    color: Colors.black,
  } as TextStyle,

  /**
   * A smaller piece of secondard information.
   */
  secondary: {
    ...BASE,
    fontSize: moderateScale(9),
    color: Colors.black,
  } as TextStyle,

  /**
   * Action labels that appear on action sheet.
   */
  calloutLabel: {
    ...BASE,
    fontSize: moderateScale(12),
    color: Colors.black,
  } as TextStyle,
};

/**
 * A list of preset names.
 */
export type TextPresets = keyof typeof CustomTextPresets;
