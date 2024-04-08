import React, {useState} from 'react';
import {Image, Linking, Pressable, StyleSheet, View} from 'react-native';
import CustomButton from './ui/CustomButton';

interface HeaderProp {
  isVisible: boolean;
}

export default function Header({isVisible}: HeaderProp) {
  const [imageIsPressed, setImageIsPressed] = useState(false);

  function handleImagePress() {
    setImageIsPressed(prev => !prev);
    console.log(imageIsPressed ? 'Unpressed' : 'Pressed');
  }
  return (
    <>
      {isVisible && (
        <Pressable onPress={handleImagePress}>
          {({pressed}) => (
            <View
              style={[
                styles.imageContainer,
                pressed && styles.pressed,
                imageIsPressed && styles.pressed,
              ]}>
              <Image source={require('../assets/icons/apps.png')} />
            </View>
          )}
        </Pressable>
      )}

      <CustomButton
        title="Sign In"
        isActive={false}
        onPress={() => Linking.openURL('https://www.youtube.com/')}
      />
    </>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 25,
    marginHorizontal: 10,
  },
  pressed: {
    backgroundColor: '#cccccc',
  },
});
