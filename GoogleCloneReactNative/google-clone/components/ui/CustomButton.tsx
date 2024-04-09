import {useContext, useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {AuthContext} from '../../context/AuthContext';

interface CustomButtonProps {
  title: string;
  isActive: boolean;
  onPress?: () => void;
  signIn?: boolean;
  userOption?: () => void;
}

export default function CustomButton({
  title,
  isActive,
  onPress,
  signIn,
  userOption,
}: CustomButtonProps) {
  const {userPhoto} = useContext(AuthContext);
  return (
    <View>
      {!signIn ? (
        <Pressable
          style={[
            styles.button,
            isActive && styles.activeButton,
            title === 'Sign In' && styles.signInButton,
          ]}
          onPress={onPress}>
          <Text
            style={[
              styles.buttonText,
              isActive && styles.activeButtonText,
              title === 'Sign In' && styles.signInButtonText,
            ]}>
            {title}
          </Text>
        </Pressable>
      ) : (
        <Pressable onPress={userOption}>
          <Image
            style={styles.userContainer}
            source={
              userPhoto ? {uri: userPhoto} : require('../../assets/user.png')
            }
          />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeButton: {
    borderBottomColor: '#1a73e8',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'grey',
  },
  activeButtonText: {
    color: '#1a73e8',
  },
  signInButton: {
    backgroundColor: '#1a73e8',
    borderRadius: 4,
    paddingHorizontal: 20,
  },
  signInButtonText: {
    color: 'white',
  },
  userContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});
