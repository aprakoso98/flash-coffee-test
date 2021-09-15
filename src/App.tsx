import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView, Text, View } from './components';

const App = () => {
  return <SafeAreaView flex backgroundColor="light">
    <StatusBar barStyle="dark-content" />
  </SafeAreaView>
}

export default App