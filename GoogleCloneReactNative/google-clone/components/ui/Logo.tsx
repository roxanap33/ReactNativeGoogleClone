import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {LogoProp} from '../../util/types';

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
  },
});
