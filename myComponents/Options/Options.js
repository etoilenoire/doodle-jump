import React from 'react'
import { StyleSheet, View, Text, Button, Dimensions } from "react-native";


class Credits extends React.Component {
    render(){
      const screenWidth = Dimensions.get('screen').width
      const screenHeight = Dimensions.get('screen').height
      return (
      
        <View style={{display: 'flex', justifyContent: 'center', alignItems:'center', marginTop: screenHeight/3}}>

        <Text>Options</Text>
           
        
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