import { StatusBar } from 'expo-status-bar';
import React, {useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Accelerometer } from 'expo-sensors';


export default function Accele() {
    // ACCELEROMETRE

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

    // PLATFORM

    // PLAYER


    return (
    <View style={styles.gameContainer, {}} >
        <View style={styles.platform, { backgroundColor: 'grey', height: 600, width: 390, zIndex: 0, display: 'flex', flexDirection: 'column-reverse'}}>
            <View style={styles.player,{marginLeft : 175 + -x*200, position: 'absolute',  backgroundColor: 'pink', height: 20, width: 20, zIndex: 1}}> 

            </View>
        </View>
        <StatusBar style="auto"/>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
  
    },
  });
