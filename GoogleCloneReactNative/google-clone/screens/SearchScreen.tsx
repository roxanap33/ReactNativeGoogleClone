import React, {useEffect, useState} from 'react';

import firestore from '@react-native-firebase/firestore';
import {Text, View} from 'react-native';

export default function SearchScreen() {
  const [results, setResults] = useState<SearchResult[]>([]);

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

    // Cleanup function
    return () => subscriber();
  }, []);

  console.log(results);

  return (
    <View>
      {/* {results.map((result, index) => (
        <Text key={index}>{result.resultsMap[1]}</Text>
      ))} */}
    </View>
  );
}
