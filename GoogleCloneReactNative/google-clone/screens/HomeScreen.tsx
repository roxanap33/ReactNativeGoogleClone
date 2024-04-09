import React, {useCallback, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {Linking, StyleSheet, View} from 'react-native';
import CustomButton from '../components/ui/CustomButton';
import SearchInput from '../components/SearchInput';
import Logo from '../components/ui/Logo';
import Footer from '../components/Footer';
import Header from '../components/Header';

const allTab = 'all';
const imagesTab = 'images';

export default function HomeScreen({navigation}: any) {
  const [activeTab, setActiveTab] = useState(allTab.toUpperCase());
  const [searchInput, setSearchInput] = useState('');

  useFocusEffect(
    useCallback(() => {
      setSearchInput('');
      setActiveTab(allTab.toUpperCase());
    }, [activeTab]),
  );

  function handleTabPress(tab: string) {
    setActiveTab(tab);
  }

  function handleSearchSubmit() {
    if (searchInput !== '') navigation.navigate('SearchScreen', {searchInput});
  }

  function handleSearchInputChange(text: string) {
    setSearchInput(text);
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.screenContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.headerLeft}>
            <CustomButton
              title={allTab.toUpperCase()}
              isActive={activeTab === allTab.toUpperCase()}
              onPress={() => handleTabPress(allTab.toUpperCase())}
            />
            <CustomButton
              title={imagesTab.toUpperCase()}
              isActive={activeTab === imagesTab.toUpperCase()}
              onPress={() => {
                handleTabPress(imagesTab.toUpperCase());
                Linking.openURL('https://www.google.com/imghp?hl=ro&ogbl');
              }}
            />
          </View>
          <View style={styles.headerRight}>
            <Header isVisible={true} />
          </View>
        </View>
        <View style={styles.logoContainer}>
          <Logo style={styles.logoImage} />
        </View>
        <View style={styles.searchContainer}>
          <SearchInput
            searchInput={searchInput}
            handleSearchInputChange={handleSearchInputChange}
            handleSubmit={handleSearchSubmit}
          />
        </View>
      </View>
      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  screenContainer: {
    //flex: 1,
    marginVertical: 20,
    marginHorizontal: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 25,
    marginHorizontal: 10,
  },
  pressed: {
    backgroundColor: '#cccccc',
  },
  logoContainer: {
    marginTop: 100,
    alignItems: 'center',
    marginBottom: 20,
  },
  logoImage: {
    width: 200,
    height: 100,
  },
  searchContainer: {
    marginTop: 80,
    alignItems: 'center',
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    marginBottom: 20,
  },
});
