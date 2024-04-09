import {Pressable, StyleSheet, Text} from 'react-native';

interface CustomButtonProps {
  title: string;
  isActive: boolean;
  onPress: () => void;
}

export default function CustomButton({
  title,
  isActive,
  onPress,
}: CustomButtonProps) {
  return (
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
});
