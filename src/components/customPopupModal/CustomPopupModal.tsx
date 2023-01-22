import React, { useRef } from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modalbox';
import { screenHeight } from '../../utils/appUtils';
import { Colors } from '../../theme/colors';
import { styles } from './styles';

interface IModalProps {
  height: any;
  visible: any;
  children: any;
  onModalClose: any;
  startOpen?: any;
  backdrop?: any;
  backdropColor?: any;
  backdropOpacity?: any;
  backdropPressToClose?: any;
  swipeArea?: any;
  backgroundColor?: string;
  swipeToClose?: boolean;
  isDisabled?: boolean;
  position?: 'center' | 'bottom'
}

export const CustomPopupModal = ({
  backdropPressToClose = false,
  height = screenHeight,
  visible = false,
  children,
  onModalClose = () => {},
  startOpen = false,
  backdrop = true,
  backdropOpacity = 0.8,
  backgroundColor,
  isDisabled = false,
  swipeToClose = true,
  position = 'center'
}: IModalProps) => {
  const modal = useRef(null);

  return (
    <Modal
      ref={modal}
      isOpen={visible}
      backdrop={backdrop}
      backdropColor={Colors.black}
      backdropOpacity={backdropOpacity}
      backdropPressToClose={backdropPressToClose}
      backButtonClose={false}
      swipeToClose={swipeToClose}
      useNativeDriver
      isDisabled={isDisabled}
      entry={'bottom'}
      position={position}
      style={[styles.modalContainer, { height: height }]}
      onClosed={onModalClose}
      coverScreen
      startOpen={startOpen}>
      <View
        style={[
          styles.modalInnerContainer,
          {
            backgroundColor: Colors.white,
            height: height,
          },
          !!backgroundColor && { backgroundColor: backgroundColor },
        ]}>
        {children}
      </View>
    </Modal>
  );
};
