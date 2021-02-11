import React from 'react'
import { StyleSheet, View, Text, Button } from "react-native";



class Credits extends React.Component {
    render(){
      return (
      
        <View>

        <Text>CREDITS</Text>
        <Text>Maëlle Rabouan
            Stephen Nicolas
            Pierre-Alexis Velain
        </Text>
              
        
        <Button
              title="Back"
              onPress={() =>
                this.props.navigation.navigate('Menu')
              }
            />
  
      </View>
      
        
      )
    }
  }


const styles = StyleSheet.create({
  button: {
    color: 'red',
  }
});

export default Credits;