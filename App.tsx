import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator
            initialRouteName="hello"
        >
          <Stack.Screen
              name="hello"
              component={() => (
                  <Text>Open up App.tsx to start working on your app!</Text>
              )}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
