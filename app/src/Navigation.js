import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './components/Home';
import SecondScreen from './components/SecondScreen';
import ThirdScreen from './components/ThirdScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Tela Inicial' }} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} options={{ title: 'Segunda Tela' }} />
        <Stack.Screen name="ThirdScreen" component={ThirdScreen} options={{ title: 'Terceira Tela' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;