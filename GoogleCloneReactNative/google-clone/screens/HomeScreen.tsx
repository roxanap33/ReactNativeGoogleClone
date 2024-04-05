import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomButton from '../components/ui/CustomButton';

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState('ALL');

  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
  };

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
          <Text>Apps</Text>
          <CustomButton
            title="Sign In"
            isActive={false}
            onPress={() => console.log('Pressed')}
          />
        </View>
      </View>
      <Text>HomeScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
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
});
