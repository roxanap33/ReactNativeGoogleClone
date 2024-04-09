import {useContext, useState} from 'react';
import {Button, Image, Modal, Pressable, StyleSheet, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import CustomButton from './ui/CustomButton';
import AppsModal from './modal/AppsModal';
import {ModalContext} from '../context/ModalContext';
//import {GoogleSignin} from '@react-native-google-signin/google-signin';

interface HeaderProp {
  isVisible: boolean;
}

export default function Header({isVisible}: HeaderProp) {
  const [imageIsPressed, setImageIsPressed] = useState(false);
  const {modalIsVisible, showModal, hideModal} = useContext(ModalContext);
  const [signIn, setSignIn] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  GoogleSignin.configure({
    webClientId:
      '14017901318-03n3p1i9ao9o628j2qvre1aaglrrdhkn.apps.googleusercontent.com',
  });
  function handleSignInPress() {
    setSignIn(prev => !prev);
  }

  function handleUserImagePress() {
    setShowSignInModal(prev => !prev);
  }

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
  async function onGoogleButtonPress() {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    try {
      const userCredential = await auth().signInWithCredential(
        googleCredential,
      );
      console.log('Signed in with Google!');
      const user = userCredential.user;
      console.log(user);
      console.log(user.displayName);
      console.log(user.email);
      console.log(user.photoURL);
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
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
        onPress={() => {
          handleSignInPress();
        }}
        userOption={handleUserImagePress}
        signIn={signIn}
      />

      {showSignInModal && (
        <View style={styles.userContainer}>
          <Image
            style={styles.userImage}
            source={require('../assets/user.jpeg')}
          />
          <CustomButton
            title="Sign Out"
            isActive={false}
            onPress={() => {
              setSignIn(false);
              setShowSignInModal(false);
            }}
          />
        </View>
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
  userContainer: {
    position: 'absolute',
    alignItems: 'center',
    top: '100%',
    width: '100%',
    left: '5%',
    right: '10%',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 4,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0.3,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 40,
    marginBottom: 5,
  },
});
