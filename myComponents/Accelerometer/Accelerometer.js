import { StatusBar } from 'expo-status-bar';
import React, {useState } from 'react';
import { View } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import Player from '../Player/Player';
import Platform from '../Platform/Platform'

export default function Accele() {

    

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
    return (
    <View style={{ backgroundColor: 'blue', height: 50}} >
        <View style={{marginLeft : -x*200, position:'absolute', backgroundColor: 'pink'}}>
            <Player />
        </View>
        <View style={{ backgroundColor: 'grey', bottom: 0}}>
            <Platform />
        </View>
        <StatusBar style="auto"/>
    </View>
    );
}

