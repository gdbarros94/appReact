import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationLink } from '@react-navigation/native';

export default function SecondScreen() {
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
        Segunda tela
      </Text>
      <NavigationLink to="ThirdScreen">
        <Button title="Ir para a terceira tela" />
      </NavigationLink>
    </View>
  );
}