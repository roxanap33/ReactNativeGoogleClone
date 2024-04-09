import React, {createContext, useEffect, useState} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
  webClientId:
    '14017901318-03n3p1i9ao9o628j2qvre1aaglrrdhkn.apps.googleusercontent.com',
});

export const AuthContext = createContext({
  userName: '',
  userEmail: '',
  userPhoto: '',
  userSignedIn: false,
  signInMethod: async () => {},
  signOutMethod: async () => {},
});

export const AuthProvider = ({children}: any) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhoto, setUserPhoto] = useState('');
  const [userSignedIn, setUserSignedIn] = useState(false);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      if (!user) {
        setUserName('');
        setUserEmail('');
        setUserPhoto('');
        setUserSignedIn(false);
      }
    });

    return subscriber;
  }, []);

  const signIn = async () => {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    try {
      const userCredential = await auth().signInWithCredential(
        googleCredential,
      );
      if (userCredential.user) {
        setUserName(userCredential.user.displayName || '');
        setUserEmail(userCredential.user.email || '');
        setUserPhoto(userCredential.user.photoURL || '');
        setUserSignedIn(true);
      }
      console.log('Signed in with Google!');
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      await auth().signOut();
      console.log('User signed out!');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        userName,
        userEmail,
        userPhoto,
        userSignedIn,
        signInMethod: signIn,
        signOutMethod: signOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
