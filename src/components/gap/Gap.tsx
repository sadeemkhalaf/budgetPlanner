import React, {FC} from 'react';

import {View} from 'react-native';
import {scaleByHeight, scaleByWidth} from '../../utils/appUtils';
import {IGapProps} from './gap.props';

/**
 * A Gap @component for created responsive gap between View React native
 * @name Gap
 * @prop {gapValue} React number value
 * @prop {type} type need to selected gap by def col
 *
 */

export const Gap: FC<IGapProps> = ({type, gapValue = 0}) => {
  return (
    <React.Fragment>
      {type === 'col' ? (
        <View style={{height: scaleByHeight(gapValue)}} />
      ) : (
        <View style={{width: scaleByWidth(gapValue)}} />
      )}
    </React.Fragment>
  );
};
