import React, {useEffect, useState} from 'react';

import firestore from '@react-native-firebase/firestore';
import {StyleSheet, Text, View} from 'react-native';
import SearchInput from '../components/SearchInput';
import Header from '../components/Header';
import Logo from '../components/Logo';

export default function SearchScreen({route, navigation}: any) {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [searchInput, setSearchInput] = useState<string>(
    route.params?.searchInput || '',
  );

  useEffect(() => {
    if (searchInput) {
      const subscriber = firestore()
        .collection('results')
        .onSnapshot(querySnapshot => {
          const resultsArray = querySnapshot.docs.map(doc => ({
            resultsMap: doc.data().resultsMap,
            searchTerm: doc.data().searchTerm,
          }));
          setResults(resultsArray);
          resultsArray.forEach(result => console.log(result.searchTerm));
        });

      return () => subscriber();
    }
  }, [searchInput]);

  //console.log('INPUT ', searchInput.toLowerCase());

  // results.forEach(result => console.log(result.searchTerm));
  // results.some(
  //   r =>
  //     r.searchTerm &&
  //     console.log(r.searchTerm.includes(searchInput.toLowerCase())),
  // );

  function handleLogoPress() {
    navigation.goBack();
  }

  function handleSearch(newSearchInput: string) {
    setSearchInput(newSearchInput);
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.headerContainer}>
        <View style={{marginLeft: '40%'}}>
          <Logo style={styles.logoImage} handlePress={handleLogoPress} />
        </View>
        <View>
          <Header isVisible={false} />
        </View>
      </View>
      <SearchInput
        searchInput={searchInput}
        handleSearchInputChange={handleSearch}
      />
      {results &&
      results.some(
        r => r.searchTerm && r.searchTerm.includes(searchInput.toLowerCase()),
      ) ? (
        results
          .filter(
            r =>
              r.searchTerm && r.searchTerm.includes(searchInput.toLowerCase()),
          )
          .map(result =>
            Object.entries(result.resultsMap || {}).map(([key, value]) => (
              <View key={key}>
                <Text>{key}</Text>
                <Text>{value}</Text>
              </View>
            )),
          )
      ) : (
        <Text>No results</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  logoImage: {
    width: 100,
    height: 50,
  },
});
