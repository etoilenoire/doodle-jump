import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Accelerometre from './myComponents/Accelerometer/Accelerometer'

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Zinzin Jump</Text>
      <Accelerometre />
      <StatusBar style="auto"/>
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
  box:{

  }
});
