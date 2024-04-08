import {useState} from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';

interface SearchInputProp {
  initialValue: string;
  handleSearch: (searchInput: string) => void;
}
export default function SearchInput({
  initialValue,
  handleSearch,
}: SearchInputProp) {
  const [enteredSearchInput, setEnteredSearchInput] = useState(initialValue);

  function handleSearchInput(text: string) {
    setEnteredSearchInput(text);
  }

  function handleSubmit() {
    if (handleSearch) {
      handleSearch(enteredSearchInput);
    }
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/icons/search.png')}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Search here"
          onSubmitEditing={handleSubmit}
          onChangeText={handleSearchInput}
          value={enteredSearchInput}
        />
        <Image
          source={require('../assets/icons/mic.png')}
          style={styles.micIcon}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 25,
    paddingHorizontal: 10,
    maxWidth: '100%',
    height: 40,
  },
  searchIcon: {
    width: 20,
    height: 20,
    left: 0,
  },
  micIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 10,
  },
  input: {
    minWidth: '90%',
    paddingLeft: 10,
    paddingRight: 50,
  },
});
