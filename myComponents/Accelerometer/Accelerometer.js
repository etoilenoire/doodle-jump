import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import Player from '../Player/Player'

export default function App() {

    const [data, setData] = useState({
        x: 0,
        y: 0,
        z: 0,
        });

    Accelerometer.setUpdateInterval(16);
    Accelerometer.addListener(accelerometerData => {
        setData(accelerometerData);
      })

    const { x, y, z } = data;

    console.log('x: ' + Math.round(x)+' y: ' + Math.round(y) +' z: '+ Math.round(z))// Math.round => retourne la valeur d' Y au nombre arrondi à l'entier le plus proche

    return (
    <View style={styles.container}>
        <Text>Accelerometre</Text>
        <Text style={styles.text}>
          x: {x} y: {Math.round(y)} z: {Math.round(z)}
        </Text>
        <Player />
        <StatusBar style="auto"/>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {

  },
});