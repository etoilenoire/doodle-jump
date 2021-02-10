import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Game from './myComponents/Game/Game'

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.title} >Zinzi Jump</Text>
      <Game />
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    backgroundColor: 'black',
    height: 765,
    display:'flex',
    alignItems: 'center',
  },
  title:{
    fontWeight: 'bold',
    fontSize: 30,
    margin: 20,
    color: '#FFFFFF'
  }
});
