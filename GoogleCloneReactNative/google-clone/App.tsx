import React from 'react';

import AppNavigator from './navigation/AppNavigator';
import {SafeAreaView} from 'react-native';
import {ModalProvider} from './context/ModalContext';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ModalProvider>
        <AppNavigator />
      </ModalProvider>
    </SafeAreaView>
  );
}

export default App;
