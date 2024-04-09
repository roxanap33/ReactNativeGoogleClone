import {useContext, useState} from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import CustomButton from './ui/CustomButton';
import AppsModal from './modal/AppsModal';
import {ModalContext} from '../context/ModalContext';

interface HeaderProp {
  isVisible: boolean;
}

export default function Header({isVisible}: HeaderProp) {
  const [imageIsPressed, setImageIsPressed] = useState(false);
  const {modalIsVisible, showModal, hideModal} = useContext(ModalContext);

  function handleImagePress() {
    setImageIsPressed(prev => !prev);
    if (modalIsVisible) {
      hideModal();
    } else {
      showModal();
    }
  }

  function closeModal() {
    setImageIsPressed(false);
    hideModal();
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
        closeModal={closeModal}
        setImageIsPressed={setImageIsPressed}
      />

      <CustomButton
        title="Sign In"
        isActive={false}
        onPress={() => console.log('Sign in pressed')}
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
