import {useContext, useState} from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';

import CustomButton from './ui/CustomButton';

import {ModalContext} from '../context/ModalContext';
import {AuthContext} from '../context/AuthContext';
import AppsModal from './apps-modal/AppsModal';
import UserModal from './user-modal/UserModal';

interface HeaderProp {
  isVisible: boolean;
}

export default function Header({isVisible}: HeaderProp) {
  const [imageIsPressed, setImageIsPressed] = useState(false);
  const {modalIsVisible, showModal, hideModal} = useContext(ModalContext);
  const [showUserModal, setShowUserModal] = useState(false);

  const {
    userSignedIn,
    signInMethod,
    signOutMethod: signOut,
  } = useContext(AuthContext);

  function handleSignInPress() {
    signInMethod();
  }

  function handleUserImagePress() {
    setShowUserModal(prev => !prev);
  }

  function handleCloseUserModal() {
    setShowUserModal(false);
  }

  function handleSignOutMethod() {
    signOut();
    setShowUserModal(false);
  }

  function handleAppsImagePress() {
    setImageIsPressed(prev => !prev);
    if (modalIsVisible) {
      hideModal();
    } else {
      showModal();
    }
  }

  function closeAppsModal() {
    setImageIsPressed(false);
    hideModal();
  }

  return (
    <>
      {isVisible && (
        <Pressable onPress={handleAppsImagePress}>
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
        closeModal={closeAppsModal}
        setImageIsPressed={setImageIsPressed}
      />
      <CustomButton
        title="Sign In"
        isActive={false}
        onPress={() => {
          handleSignInPress();
        }}
        userOption={handleUserImagePress}
        signIn={userSignedIn}
      />

      {showUserModal && (
        <UserModal
          modalClose={handleCloseUserModal}
          modalSignOut={handleSignOutMethod}
          showUserModal={showUserModal}
        />
      )}
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
