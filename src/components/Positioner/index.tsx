import React, { ReactNode } from 'react';
import { View, ViewStyle } from 'react-native';

export type PositionerProps = {
  m?: number;
  mb?: number;
  mt?: number;
  mh?: number;
  mv?: number;
  ml?: number;
  mr?: number;
  position?: ViewStyle['position'];
  left?: number;
  right?: number;
  bottom?: number;
  top?: number;
  alignSelf?: ViewStyle['alignSelf'];
  height?: number | string;
  width?: number | string;
  flex?: ViewStyle['flex'];
  children: ReactNode;
};

const Positioner = ({
  m,
  mb,
  mt,
  mh,
  mv,
  ml,
  mr,
  position,
  left,
  right,
  bottom,
  top,
  alignSelf,
  height,
  width,
  flex,
  children,
}: PositionerProps) => (
  <View
    style={{
      margin: m,
      marginBottom: mb,
      marginTop: mt,
      marginHorizontal: mh,
      marginVertical: mv,
      marginLeft: ml,
      marginRight: mr,
      position,
      left,
      right,
      bottom,
      top,
      alignSelf,
      height,
      width,
      flex,
    }}
  >
    {children}
  </View>
);

export default Positioner;
