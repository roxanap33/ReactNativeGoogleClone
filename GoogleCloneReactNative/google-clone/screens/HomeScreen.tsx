import React, {useState} from 'react';
import {Image, Linking, Pressable, StyleSheet, Text, View} from 'react-native';
import CustomButton from '../components/ui/CustomButton';
import SearchInput from '../components/SearchInput';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function HomeScreen({navigation}: any) {
  const [activeTab, setActiveTab] = useState('ALL');

  const [searchInput, setSearchInput] = useState('');

  function handleTabPress(tab: string) {
    setActiveTab(tab);
  }

  function handleSearch(searchInput: string) {
    setSearchInput(searchInput);
    console.log('HAI ', searchInput);

    navigation.navigate('SearchScreen', {searchInput});
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
          <CustomButton
            title="ALL"
            isActive={activeTab === 'ALL'}
            onPress={() => handleTabPress('ALL')}
          />
          <CustomButton
            title="IMAGES"
            isActive={activeTab === 'IMAGES'}
            onPress={() => handleTabPress('IMAGES')}
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
        <SearchInput initialValue="" handleSearch={handleSearch} />
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
    marginBottom: 50,
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
