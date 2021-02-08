import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Gyroscope } from 'expo-sensors';


export default function App() {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  Gyroscope.addListener(gyroscopeData => {
    setData(gyroscopeData);
  })

  const { x, y, z } = data;

  // console.log('x: ' + Math.round(x)+' y: ' + Math.round(y) +' z: '+ Math.round(z))

  return (
    <View style={styles.container}>
      <Text>Zinzin Jump</Text>
      <Text style={styles.text}>
          x: {Math.round(x)} y: {Math.round(y)} z: {Math.round(z)}
      </Text>
      <StatusBar style="auto" />
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
