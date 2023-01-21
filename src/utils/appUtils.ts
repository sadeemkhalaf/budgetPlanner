import {Dimensions} from 'react-native';

export const screenHeight = Dimensions.get('screen').height;
export const screenWidth = Dimensions.get('screen').width;

// based on iphone 11s's scale
//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const scaleByHeight = (size: number) =>
  (screenHeight / guidelineBaseHeight) * size;

export const scaleByWidth = (size: number) =>
  (screenWidth / guidelineBaseWidth) * size;

export const moderateScale = (size: number, factor = 0.5) =>
  size + (scaleByWidth(size) - size) * factor;
