import React, { useRef } from 'react'
import { Animated, Easing, Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../config/theme/theme'
import useAnimation from '../../hooks/useAnimation'

export const Animation101Screen = () => {

  const {
    animatedOpacity,
    fadeIn,
    fadeOut,
    animatedTop,
    startMovinStopPosition
  } = useAnimation();



  return (  
    <View style={styles.container}>

        <Animated.View style={[
           styles.purpleBox,
           {
            opacity:animatedOpacity,
            transform:[{
              translateY:animatedTop
            }]
           }
        ]}>
        </Animated.View>

        <Pressable onPress={()=> {fadeIn({}),startMovinStopPosition({initialPosition:-100,duration:500,easing:Easing.elastic(2)})}} style={{marginTop:10}}>
            <Text>FadeIN</Text>
        </Pressable>

        <Pressable onPress={()=> fadeOut({})} style={{marginTop:10}}>
            <Text>FadeOUT</Text>
        </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    flex:1,
    justifyContent:'center'
  },
   purpleBox:{
    backgroundColor:colors.primary,
    width:150,
    height:150
   }
})