import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { Accelerometer } from 'expo-sensors';

export default function Game() {
    // GLOBALE
    const screenWidth = Dimensions.get('screen').width
    const screenHeight = Dimensions.get('screen').height
    const [gravity, setGravity] = useState(3)
    const widthPlat = 70
    const heightPlat = 15
    const pousse = 7
    const [marginBottomPlat, setmarginBottomPlat] = useState([100, 170, 220,300, 340, 450, 510, 20]) // Initialisation des coordonnées de toutes les platformes
    const marginLeftPlat = [50, 190, 280, 10, 200, 300, 190, 70] // Initialisation des coordonnées de toutes les platformes
    const [score, setScore] = useState(0)
    
    const widthEnnemy = 20
    const heightEnnemy = 20
    
    // genération d'une valeur aléatoire depuis la l'array items
const getRandomSeq = () => {
	const items = [150, 220, 300, 100, 170, 220 ]
	return items[parseInt(Math.random()* items.length)]
}

var [marginBottomEnnemy, setmarginBottomEnnemy] = useState([150, 220, 300])
    var marginLeftEnnemy = [100, 170, 220]


    function gameOver(){
        alert('You Lose !')
    }

    function dificulty() {
        // setTimeout(function(){ setGravity(gravity + 1) }, 1000); // toute les secondes la gravité est de plus en plus forte 
    }


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

    // PLAYER
    const [jump, setJump] = useState(false)
    const [bottomPlayer, setbottomPlayer] = useState(screenHeight / 3);


        // Jump
        function isJump(isjump) { //fonction isJump avec jump en paramétre 
            if(isjump){
                setbottomPlayer(bottomPlayer => bottomPlayer + gravity + pousse) 
                setTimeout(function(){ setJump(!jump) }, 400); // Au bout de 900 ms jump re passe a false donc le player re-desend 
            }else{
                setbottomPlayer(bottomPlayer => bottomPlayer - gravity)
            } 
        }

        // Falling
        useEffect(()=>{
            if(bottomPlayer > 0){
                gameTimerPlayer = setInterval(()=>{
                    // appelle de la fonction Jump / Gravity
                    isJump(jump)
                    // COllISION CHECK
                    collisionCheck()
                    hitCheck()
                    dificulty()
                    
                },20)// Toutes les 30 ms 
                return()=> {
                    clearInterval(gameTimerPlayer)
                }
            }
            if(bottomPlayer < 0){
                gameOver()
            }
        },[bottomPlayer]);


    //PLATFORM
        // Platform Set Up <- Affichage dynamique
        var platform = [];

        for(let i = 0; i < marginBottomPlat.length; i++){
            platform.push(
                <View key = {i} style={styles.platform,{ position: 'absolute',  backgroundColor: 'green', height: heightPlat, width: widthPlat, zIndex: 1, marginBottom: marginBottomPlat[i], marginLeft: marginLeftPlat[i]} }> 
            </View>
            )
        }


        // Ennemy
        var ennemy = [];

        for(let i = 0; i < marginBottomEnnemy.length; i++){
            ennemy.push(
                <View key = {i} style={styles.ennemy,{ position: 'absolute', backgroundColor: 'red', height: heightEnnemy, width: widthEnnemy, marginBottom: marginBottomEnnemy[i], marginLeft: marginLeftEnnemy[i]}}>

                </View>

            )
        }
    


        // Mouv Platforme
        function movePlat() {
            for(let i = 0; i < marginBottomPlat.length; i++){
                marginBottomPlat[i] = marginBottomPlat[i] - 100
                if(marginBottomPlat[i] < 0){
                    marginBottomPlat[i] = 500 + marginBottomPlat[i]
                    setScore(score => score + 1)
                }
            }
        }

        // Collision check
        function collisionCheck() {
            for(let i = 0; i < marginBottomPlat.length; i++){ // pour toute les platformes repertiorier dans le tableau marginBottomPlat
                if(bottomPlayer - 20 < marginBottomPlat[i] +2 && bottomPlayer - 20 > marginBottomPlat[i] - 2 
                    && (175 + -x*200) > marginLeftPlat[i] && (175 + -x*200)< marginLeftPlat[i] + widthPlat ){
                    setJump(!jump) // Si la collision est validé jump passe a true 
                    movePlat() // Appelle de la fonction qui fait dessendre les platformes
                    
                }
            }
        }

        // Hit check
        function hitCheck() {
            for(let i = 0; i < marginBottomEnnemy.length; i++){ // pour toute les platformes repertiorier dans le tableau marginBottomPlat
                if(bottomPlayer - 20 < marginBottomEnnemy[i] +2 && bottomPlayer - 20 > marginBottomEnnemy[i] - 2 
                    && (175 + -x*200) > marginLeftEnnemy[i] && (175 + -x*200)< marginLeftEnnemy[i] + widthEnnemy ){
                    gameOver()
                    
                }
            }
        }
    


        
    return (
        
        <View
          style={styles.gameContainer, { backgroundColor: 'grey', height: screenHeight - screenHeight/3, width: screenWidth, zIndex: 0, display: 'flex', flexDirection: 'column-reverse'}} >
              
              <Text>{score}</Text>
              
                
            <View style={styles.player,{marginLeft : 175 + -x*200, marginBottom: bottomPlayer, position: 'absolute',  backgroundColor: 'pink', height: 20, width: 20}}> 
            </View>
            {platform}
            {ennemy}
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
  
    },
  });
