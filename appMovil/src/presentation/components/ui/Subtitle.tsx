import React from 'react'
import { Text, View } from 'react-native'
import { colors, globalStyles } from '../../../config/theme/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props{
    texto?:string;
    safe?:boolean;
    backgroundColor?:string;
    borderRadius?:number
}
const Subtitle = ({ texto, safe=false, backgroundColor=colors.background,borderRadius}:Props) => {
    
    const {top} = useSafeAreaInsets();

    return (
    <Text
        style={{...globalStyles.subTitle,
            marginTop:safe? top:0,
            marginBottom:10,
            backgroundColor:backgroundColor,
            borderRadius:borderRadius,
            
        }}
        >
        {texto}
    </Text>
  )
}

export default Subtitle