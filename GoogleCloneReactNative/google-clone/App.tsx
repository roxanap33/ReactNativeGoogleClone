import React from 'react';

import AppNavigator from './navigation/AppNavigator';
import {SafeAreaView} from 'react-native';
import {ModalProvider} from './context/ModalContext';
import {AuthProvider} from './context/AuthContext';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AuthProvider>
        <ModalProvider>
          <AppNavigator />
        </ModalProvider>
      </AuthProvider>
    </SafeAreaView>
  );
}

export default App;
