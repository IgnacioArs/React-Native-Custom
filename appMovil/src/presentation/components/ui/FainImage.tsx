import React, { useState } from 'react'
import { ActivityIndicator, Animated, ImageStyle, StyleProp,View } from 'react-native'
import useAnimation from '../../hooks/useAnimation'

interface Props {
    uri?:string,
    style?:StyleProp<ImageStyle>
}

const FaInImage = ({uri,style}:Props) => {

    const {animatedOpacity,fadeIn} = useAnimation();
    const [isLoading,setIsLoading] = useState(true);

  return (
    <View style={{justifyContent:'center',alignContent:'center'}}>
        
        {isLoading && (
            <ActivityIndicator 
            style={{position:'absolute'}}
            color="gray" 
            size={50}   
            />
        )}

        <Animated.Image
            source={{uri}}
            onLoadEnd={()=>{
                fadeIn({duration:1000})
                setIsLoading(false);
            }}
            style={[style,{opacity:animatedOpacity}]}
        />
    
    </View>
  )
}

export default FaInImage