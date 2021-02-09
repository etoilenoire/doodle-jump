import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Gyroscope } from 'expo-sensors';

export default function App() {

  // initialisation des 3 axes du Gyroscope
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  const [posPerso, setposPerso] = useState(0); // initialisation du state que gere la position du perso

  const { x, y, z } = data;

  
  Gyroscope.setUpdateInterval(16);
  Gyroscope.addListener(gyroscopeData => { 
    setData(gyroscopeData); 
  });
  
  console.log('x: ' + Math.round(x)+' y: ' + Math.round(y) +' z: '+ Math.round(z))// Math.round => retourne la valeur d' Y au nombre arrondi à l'entier le plus proche
 
  return (
    <View style={styles.container}>
      <Text>Zinzin Jump</Text>
      <Text style={styles.text , { transform: [{ translateX: posPerso }]}}>
          x: {Math.round(x)} y: {Math.round(y)} z: {Math.round(z)}
      </Text>
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
