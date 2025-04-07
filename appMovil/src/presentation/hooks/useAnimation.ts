import React, { useRef } from 'react'
import { Animated, Easing } from 'react-native';

const useAnimation = () => {

  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(-100)).current;

  const fadeIn = ({duration=300,toValue=1,callback = () => {}}) => {


/*      Animated.timing(animatedTop,{
        toValue:1,
        duration:300,
        useNativeDriver:true,
        easing:Easing.bounce   
      }).start(()=> console.log("animated ended")) */
        /* Easing.elastic(1) */

      Animated.timing(animatedOpacity,{
          toValue:toValue,
          duration:duration,
          useNativeDriver:true
      }).start(callback)
  }

  const fadeOut = ({duration=300,toValue=0,callback = () => {}}) => {
    Animated.timing(animatedOpacity,{
        toValue:toValue,
        duration:duration,
        useNativeDriver:true
    }).start(callback)
/*     start(()=> animatedTop.resetAnimation() */
  }

  const startMovinStopPosition = ({
    initialPosition=0,
    toValue=0,
    duration=3000,
    easing=Easing.linear,
    callback =()=> {}
  }) => {
  animatedTop.setValue(initialPosition);
  Animated.timing(animatedTop,{
    toValue:toValue,
    duration:duration,
    useNativeDriver:true,
    easing:easing
  }).start(callback)

}
  



  return {
    animatedOpacity,
    fadeIn,
    fadeOut,
    animatedTop,
    startMovinStopPosition
  }
}

export default useAnimation