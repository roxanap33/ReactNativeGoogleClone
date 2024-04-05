import React from 'react';

import AppNavigator from './navigation/AppNavigator';
import {SafeAreaView} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AppNavigator />
    </SafeAreaView>
  );
}

export default App;
