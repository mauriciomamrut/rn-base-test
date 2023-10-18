import React from 'react';
import { Image, ImageProps, Pressable } from 'react-native';
import { Avatar as AvatarPlaceholder } from 'assets';
import styles from './styles';

interface Props {
  image?: ImageProps;
  onPress?: (() => void) | null;
}

function Avatar({ image, onPress = null }: Props) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image style={styles.image} source={image || AvatarPlaceholder} />
    </Pressable>
  );
}

export default Avatar;
