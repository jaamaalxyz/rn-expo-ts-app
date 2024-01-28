import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Greeting from '@/components/Greeting';

export default function App() {
  return (
    <View style={styles.container}>
      <Greeting name="Jane" birthYear={1995} />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C7687',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
