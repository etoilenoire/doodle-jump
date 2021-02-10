import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import Player from '../Player/Player';
import Platform from '../Platform/Platform'

export default function Accele() {

    const [data, setData] = useState({
      x: 0,
      y: 0,
      z: 0,
    });

    //const [posPlayer, setposPlayer] = useState(50);

    Accelerometer.setUpdateInterval(16);
    Accelerometer.addListener(accelerometerData => {
      setData(accelerometerData);
    })

    const { x, y, z } = data;


    // console.log(posPlayer)
    // console.log('x: ' + Math.round(x)+' y: ' + Math.round(y) +' z: '+ Math.round(z))// Math.round => retourne la valeur d' Y au nombre arrondi à l'entier le plus proche
    
    return (
    <View style={styles.container}>
        <View style={{marginLeft : 175 - x*200}}>
            <Player/>
        </View>
        <Platform />
        <StatusBar style="auto"/>
    </View>
    );
}

const styles = StyleSheet.create({
});