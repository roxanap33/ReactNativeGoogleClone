import {StyleSheet, TextInput, View} from 'react-native';

export default function SearchInput() {
  return (
    <View style={styles.rootContainer}>
      <TextInput style={styles.input} placeholder="Search here" />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    minWidth: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 25,
    paddingHorizontal: 10,
  },
});
