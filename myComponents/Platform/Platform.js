import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



let platformCount = 5            //test

// class Platforms {
//   constructor(newPlatformBottom){
//   this.bottom = newPlatformBottom
//   this.left = math.random() * 315
//   this.visual = document.createElement('div')           //créer une div pour chaque platform

//   const visual = this.visual
//   visual.classList.add('platforms')
//   visual.style.left = this.left + 'px'
//   visual.style.bottom = this.bottom + 'px'
//   grid.appendChild(visual)
// }

export default function createPlatforms() {

// for(let i =0, i < platformCount; i++) {
//   let platformGap = 600 / platformCount                 //espacement entre les plateformes taille de la grille diviser par nb platform
//   let newPlatformBottom = 100 + i * PlatformGap             //incrémenter gap space
//   let newPlatformBottom = Platforms(newPlatformBottom)                        //more platforms
// }


  return (                                                            //css plateforme + grille
    <View style={styles.createPlatforms}>                          
      <Text>Platform</Text>
      <view style={styles.grid, {backgroundColor: 'cornflowerblue', width:400, height:600, position:'relative' }}> </view>
      <view style={styles.platforms, {backgroundColor: 'blueviolet', width:85, height:15, position:'absolute' }}> </view>
      <StatusBar style="auto"/>
    </View>

  );
}



const styles = StyleSheet.create({
  container: {
 
  },
});