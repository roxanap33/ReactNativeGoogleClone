import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import {ModalProvider} from './context/ModalContext';
import {AuthProvider} from './context/AuthContext';

function App(): React.JSX.Element {
  return (
    <View style={styles.safeArea}>
      <AuthProvider>
        <ModalProvider>
          <AppNavigator />
        </ModalProvider>
      </AuthProvider>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});
