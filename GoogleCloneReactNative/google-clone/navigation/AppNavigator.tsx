import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';

export default function AppNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Recipes">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
