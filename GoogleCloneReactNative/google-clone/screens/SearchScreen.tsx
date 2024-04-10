import {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import firestore from '@react-native-firebase/firestore';
import {StyleSheet, View} from 'react-native';
import SearchInput from '../components/SearchInput';
import Header from '../components/Header';
import Logo from '../components/ui/Logo';
import ResultList from '../components/search/ResultList';
import {SearchResult} from '../util/types';

export default function SearchScreen({route, navigation}: any) {
  const [results, setResults] = useState<SearchResult[]>([]);
  const searchValue = route.params?.searchInput || '';
  const [searchInput, setSearchInput] = useState(searchValue);
  const [submittedSearch, setSubmittedSearch] = useState(searchValue);

  useEffect(() => {
    if (submittedSearch) {
      fetchData();
    }
  }, [submittedSearch]);

  function fetchData() {
    firestore()
      .collection('results')
      .onSnapshot(querySnapshot => {
        const resultsArray = querySnapshot.docs.map(doc => ({
          resultsMap: doc.data().resultsMap,
          searchTerm: doc.data().searchTerm,
        }));
        setResults(resultsArray);
      });
  }

  function handleLogoPress() {
    navigation.goBack();
  }

  function handleSearch(newSearchInput: string) {
    setSearchInput(newSearchInput);
  }

  function handleSearchSubmit() {
    if (searchInput) setSubmittedSearch(searchInput);
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.rootContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.logoContainer}>
            <Logo style={styles.logoImage} handlePress={handleLogoPress} />
          </View>
          <View>
            <Header appsImgisVisible={false} />
          </View>
        </View>

        <View style={styles.searchContainer}>
          <SearchInput
            searchInput={searchInput}
            handleSearchInputChange={handleSearch}
            handleSubmit={handleSearchSubmit}
          />
        </View>
        <View style={styles.resultsContainer}>
          {results && (
            <ResultList results={results} searchInput={submittedSearch} />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
  rootContainer: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  logoContainer: {
    marginLeft: '40%',
  },
  logoImage: {
    width: 100,
    height: 50,
  },
  searchContainer: {
    marginBottom: '15%',
  },
  resultsContainer: {
    flex: 1,
    marginTop: 0,
    marginHorizontal: 10,
  },
});
