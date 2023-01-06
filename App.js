import React, { useState } from 'react';
import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './screens/HomePage';

const Stack = createNativeStackNavigator();




export default function App() {

  const [showAnimation, setShowAnimation] = useState(false);
  return (
   <View
   style={{ flex: 1, alignItems: 'center', justifyContent:'center'}}
   >
      {showAnimation && <HomePage />}
      <TouchableOpacity onPress={() => setShowAnimation(!showAnimation)}>
      <Text>Show animation</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
