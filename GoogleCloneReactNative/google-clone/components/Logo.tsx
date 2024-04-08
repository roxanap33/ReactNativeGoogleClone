import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

export default function Logo() {
  return (
    <View style={styles.rootContainer}>
      <Image
        style={styles.logoImage}
        source={require('../assets/google-logo-color.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: 200,
    height: 100,
  },
});
