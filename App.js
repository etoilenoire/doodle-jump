import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Accelerometre from './myComponents/Accelerometer/Accelerometer'

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Zinzi Jump</Text>
      <Accelerometre />
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  }
});
