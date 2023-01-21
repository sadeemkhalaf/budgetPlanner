import * as React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store/storeConfigs';
import { Colors } from '../../theme/colors';
import { isNonScrolling, offsets, presets } from './screen.presets';
import { ScreenProps } from './screen.props';

const isIos = Platform.OS === 'ios';

function ScreenWithoutScrolling(props: ScreenProps) {
  const { langType } = useSelector((state: IRootState) => state.App);
  const isRtl = langType === 'ar' ? true : false;
  const insets = useSafeAreaInsets();
  const preset = props.preset ? presets[props.preset] : presets.fixed;
  const style = props.style || {};
  const backgroundStyle = props.backgroundColor
    ? { backgroundColor: props.backgroundColor }
    : {
      backgroundColor: Colors.white,
    };

  const insetStyle = { paddingTop: props.unsafe ? 0 : insets.top };

  const header = props.header ? props.header : null;

  return (
    <>
      {header}
      <KeyboardAvoidingView
        style={[
          preset.outer,
          { direction: isRtl ? 'rtl' : 'ltr' },
          backgroundStyle,
          insetStyle,
        ]}
        // behavior={isIos ? 'padding' : null}
        behavior={props.keyboardAvoiding && isIos ? 'padding' : undefined}
        keyboardVerticalOffset={offsets[props.keyboardOffset || 'none']}
      >
        <View style={[preset.inner, style]}>{props.children}</View>
      </KeyboardAvoidingView>
    </>
  );
}

function ScreenWithScrolling(props: ScreenProps) {
  const { langType } = useSelector((state: IRootState) => state.App);
  const isRtl = langType === 'ar' ? true : false;
  const insets = useSafeAreaInsets();
  const preset = presets.scroll;
  const style = props.style || {};

  const backgroundStyle = props.backgroundColor
    ? { backgroundColor: props.backgroundColor }
    : {
      backgroundColor: Colors.white,
    };

  const insetStyle = { paddingTop: props.unsafe ? 0 : insets.top };

  const header = props.header ? props.header : null;

  return (
    <>
      {header}
      <KeyboardAvoidingView
        style={[
          preset.outer,
          { direction: isRtl ? 'rtl' : 'ltr' },
          backgroundStyle,
          insetStyle,
        ]}
        behavior={isIos ? 'padding' : undefined}
        keyboardVerticalOffset={offsets[props.keyboardOffset || 'none']}
      >
        <View style={[preset.outer, backgroundStyle]}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={[preset.outer, backgroundStyle]}
            contentContainerStyle={[preset.inner, style]}
            keyboardShouldPersistTaps="handled"
          >
            {props.children}
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}

/**
 * The starting component on every screen in the app.
 *
 * @param props The screen props
 */
export function Screen(props: ScreenProps) {
  return (
    <>
      {isNonScrolling(props.preset) ? (
        <ScreenWithoutScrolling {...props} />
      ) : (
        <ScreenWithScrolling {...props} />
      )}
    </>
  );
}
