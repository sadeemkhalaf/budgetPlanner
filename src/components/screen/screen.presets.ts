import {ViewStyle} from 'react-native';
import {isNil} from 'ramda';
import {Colors} from '../../theme/colors';

/**
 * All screen keyboard offsets.
 */
export const offsets = {
  none: 0,
};

/**
 * The variations of keyboard offsets.
 */
export type KeyboardOffsets = keyof typeof offsets;

/**
 * All the variations of screens.
 */
export const presets = {
  /**
   * No scrolling. Suitable for full-screen carousels and components
   * which have built-in scrolling like FlatList.
   */
  fixed: {
    outer: {
      backgroundColor: Colors.white,
      flex: 1,
      height: '100%',
    } as ViewStyle,
    inner: {
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      height: '100%',
      width: '100%',
    } as ViewStyle,
  },

  /**
   * Scrolls. Suitable for forms or other things requiring a keyboard.
   *
   * Pick this one if you don't know which one you want yet.
   */
  scroll: {
    outer: {
      backgroundColor: Colors.white,
      flex: 1,
    } as ViewStyle,
    inner: {justifyContent: 'flex-start'} as ViewStyle,
  },

  full: {
    outer: {
      position: 'absolute',
      width: '100%',
      height: '100%',
    } as ViewStyle,
    inner: {
      height: '100%',
      width: '100%',
    } as ViewStyle,
  },
};

/**
 * The variations of screens.
 */
export type ScreenPresets = keyof typeof presets;

/**
 * Is this preset a non-scrolling one?
 *
 * @param preset The preset to check
 */
export function isNonScrolling(preset: ScreenPresets | undefined) {
  // any of these things will make you scroll
  return (
    isNil(preset) ||
    !preset.length ||
    isNil(presets[preset]) ||
    preset === 'fixed' ||
    preset === 'full'
  );
}
