import React from 'react';
import { View } from 'react-native';

export type SpaceProps = {
  dx?: number;
  dy?: number;
};

const Space = ({ dx, dy }: SpaceProps) => (
  <View style={{ width: dx, height: dy }} />
);

export default Space;
