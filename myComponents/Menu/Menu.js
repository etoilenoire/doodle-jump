import 'react-native-gesture-handler';
import React, { useState } from 'react'
import { StyleSheet, View, Text, Button, Image, Dimensions } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

import imgBg from "../../assets/bgSpace.jpg";

const Stack = createStackNavigator();


class Menu extends React.Component {

  render(){
    const screenWidth = Dimensions.get('screen').width
    const screenHeight = Dimensions.get('screen').height

    return (
    
      <View style={{display: 'flex', justifyContent: 'center', alignItems:'center', marginTop: screenHeight/3}}>
        <Image source={imgBg} style={{zIndex:-1, position: 'absolute', width:screenWidth, height: screenHeight }}/>  
        <Button
            title="Play"
            onPress={() => {
              this.props.navigation.navigate('Game')
              }
            }
            style={{margin: 40 }}
          />
  
  <Button style={{margin: 40 }}
            title="Options"
            onPress={() =>
              this.props.navigation.navigate('Options')
            }
          />
  
  <Button style={{margin: 40 }}
            title="Credits"
            onPress={() =>
              this.props.navigation.navigate('Credits')
            }
          />
  
      </View>
    )
  }
}
      
    



export default Menu;