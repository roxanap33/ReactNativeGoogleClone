import {useContext, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import CustomButton from './ui/CustomButton';
import {ModalContext} from '../context/ModalContext';
import {AuthContext} from '../context/AuthContext';
import AppsModal from './apps-modal/AppsModal';
import UserModal from './user-modal/UserModal';
import {HeaderProp} from '../util/types';

export default function Header({appsImgisVisible}: HeaderProp) {
  const [imageIsPressed, setImageIsPressed] = useState(false);
  const {modalIsVisible, showModal, hideModal} = useContext(ModalContext);
  const [showUserModal, setShowUserModal] = useState(false);

  const {userSignedIn, signInMethod, signOutMethod, isLoading} =
    useContext(AuthContext);

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
    signOutMethod();
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

  let signInContent = (
    <CustomButton
      title="Sign In"
      isActive={false}
      onPress={() => {
        handleSignInPress();
      }}
      userOption={handleUserImagePress}
      signIn={userSignedIn}
    />
  );

  if (isLoading) {
    signInContent = (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="small" color="#1a73e8" />
      </View>
    );
  }

  return (
    <>
      {appsImgisVisible && (
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

      {signInContent}

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
  loaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
