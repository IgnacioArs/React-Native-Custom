import React from 'react'
import { Pressable, StyleProp, Text, ViewStyle } from 'react-native'
import { colors, globalStyles } from '../../../config/theme/theme';


interface Props {
    text:string;
    style?:StyleProp<ViewStyle>;
    onPress: () =>void;
}
const Button = ({text,style, onPress}:Props) => {
  return (
   <Pressable
   onPress={onPress}
   style={({pressed}) => ([
    globalStyles.btnPrimary,
    {
        opacity:pressed ? 0.08:1,
        backgroundColor:colors.primary
    },
    style
   ])}
   >
    <Text style={[
        globalStyles.btnPrimary,
        {
            color:colors.buttonTextColor
        }
    ]}>
        {text}
    </Text>
   </Pressable>
  )
}

export default Button