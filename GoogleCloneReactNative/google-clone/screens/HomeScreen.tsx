import React, {useState} from 'react';
import {Image, Linking, Pressable, StyleSheet, Text, View} from 'react-native';
import CustomButton from '../components/ui/CustomButton';
import SearchInput from '../components/SearchInput';
import Logo from '../components/Logo';
import Footer from '../components/Footer';

export default function HomeScreen({navigation}: any) {
  const [activeTab, setActiveTab] = useState('ALL');
  const [imageIsPressed, setImageIsPressed] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  function handleTabPress(tab: string) {
    setActiveTab(tab);
  }

  function handleImagePress() {
    setImageIsPressed(prev => !prev);
    console.log(imageIsPressed ? 'Unpressed' : 'Pressed');
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
          <Pressable onPress={handleImagePress}>
            {({pressed}) => (
              <View
                style={[
                  styles.imageContainer,
                  pressed && styles.pressed,
                  imageIsPressed && styles.pressed,
                ]}>
                <Image source={require('../assets/icons/apps.png')} />
              </View>
            )}
          </Pressable>

          <CustomButton
            title="Sign In"
            isActive={false}
            onPress={() => Linking.openURL('https://www.youtube.com/')}
          />
        </View>
      </View>
      <View style={styles.logoContainer}>
        <Logo />
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
    marginTop: 150,
    alignItems: 'center',
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
