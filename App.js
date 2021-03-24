import 'react-native-gesture-handler';

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/HomeScreen'
import DisplayScreen from './src/DisplayScreen'
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="Data" component={DisplayScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;