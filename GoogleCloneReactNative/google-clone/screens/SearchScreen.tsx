import React, {useEffect, useState} from 'react';

import firestore from '@react-native-firebase/firestore';
import {Text, View} from 'react-native';
import SearchInput from '../components/SearchInput';

export default function SearchScreen({route}: any) {
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

  return (
    <View>
      <SearchInput initialValue={searchInput} />
      {/* {results.map((result, index) => (
        <Text key={index}>{result.resultsMap[1]}</Text>
      ))} */}
    </View>
  );
}
