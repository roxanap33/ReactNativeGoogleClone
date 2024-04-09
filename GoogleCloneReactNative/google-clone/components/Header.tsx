import React, {useEffect, useState} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {
  Image,
  Linking,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CustomButton from './ui/CustomButton';
import ModalContent from './modal/ModalContent';
import {modalItems} from '../util/constatnts';
import AppsModal from './modal/AppsModal';

interface HeaderProp {
  isVisible: boolean;
  initialState: boolean;
}

export default function Header({isVisible, initialState}: HeaderProp) {
  const [modalVisible, setModalVisible] = useState(false);
  const [imageIsPressed, setImageIsPressed] = useState(false);

  useEffect(() => {
    setModalVisible(initialState);
  }, [initialState]);

  function handleImagePress() {
    setImageIsPressed(prev => !prev);
    setModalVisible(prev => !prev);
    console.log(imageIsPressed ? 'Unpressed' : 'Pressed');
  }

  function closeModal() {
    setImageIsPressed(false);
    setModalVisible(false);
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

      <AppsModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        closeModal={closeModal}
      />

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
