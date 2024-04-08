import React, {useEffect, useState} from 'react';

import firestore from '@react-native-firebase/firestore';
import {StyleSheet, Text, View} from 'react-native';
import SearchInput from '../components/SearchInput';
import Header from '../components/Header';
import Logo from '../components/Logo';

export default function SearchScreen({route, navigation}: any) {
  const [results, setResults] = useState<SearchResult[]>([]);
  const {searchInput} = route.params;

  useEffect(() => {
    const subscriber = firestore()
      .collection('results')
      .onSnapshot(querySnapshot => {
        const resultsArray = querySnapshot.docs.map(doc => ({
          resultsMap: doc.data().resultsMap,
          searchTerm: doc.data().searchTerm,
        }));
        setResults(resultsArray);
      });

    return () => subscriber();
  }, []);

  console.log(results);

  function handleLogoPress() {
    navigation.goBack();
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
      <SearchInput initialValue={searchInput} />
      {/* {results.map((result, index) => (
        <Text key={index}>{result.resultsMap[1]}</Text>
      ))} */}
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
