import React from 'react';
import {
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SearchResult} from '../../util/types';

interface ResultListProps {
  results: SearchResult[];
  searchInput: string;
}

export default function ResultList({results, searchInput}: ResultListProps) {
  function handleLinkPress(value: string) {
    Linking.openURL(value);
  }

  return (
    <ScrollView>
      {results.some(
        r => r.searchTerm && r.searchTerm.includes(searchInput.toLowerCase()),
      ) ? (
        results
          .filter(
            r =>
              r.searchTerm && r.searchTerm.includes(searchInput.toLowerCase()),
          )
          .map(result =>
            Object.entries(result.resultsMap || {}).map(([key, value]) => (
              <View key={key} style={styles.resultContainer}>
                <Text style={styles.resultTitle}>{key}</Text>
                <Pressable onPress={() => handleLinkPress(value)}>
                  <Text>{value}</Text>
                </Pressable>
              </View>
            )),
          )
      ) : (
        <Text>No results</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  resultContainer: {
    marginVertical: 15,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
  },
  resultTitle: {
    color: '#387bee',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
