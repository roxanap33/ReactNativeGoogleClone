import React from 'react';
import {
  Image,
  ImageStyle,
  Pressable,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

interface LogoProp {
  style: ImageStyle;
  handlePress?: () => void;
}

export default function Logo({style, handlePress}: LogoProp) {
  return (
    <View style={styles.rootContainer}>
      <Pressable onPress={handlePress}>
        <Image
          style={style}
          source={require('../../assets/google-logo-color.png')}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
