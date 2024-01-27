import React from 'react';
import { View, Button } from 'react-native';
import { NavigationLink } from '@react-navigation/native';

export default function Home() {
  return (
    <View style={{
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Text style={{
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
      }}>
        Tela inicial
      </Text>
      <NavigationLink to="SecondScreen">
        <Button title="Ir para a segunda tela" />
      </NavigationLink>
    </View>
  );
}