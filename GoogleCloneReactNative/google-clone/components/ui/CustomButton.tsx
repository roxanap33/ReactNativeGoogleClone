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
      onPress={onPress}
      style={[styles.button, isActive && styles.activeButton]}>
      <Text style={[styles.buttonText, isActive && styles.activeButtonText]}>
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
    borderBottomColor: 'blue',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'grey',
  },
  activeButtonText: {
    color: 'blue',
  },
});
