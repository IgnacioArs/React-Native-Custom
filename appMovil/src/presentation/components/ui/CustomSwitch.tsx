import React, { useState } from 'react'
import { Platform, StyleSheet, Switch, Text, View } from 'react-native'
import { colors } from '../../../config/theme/theme';


interface Props {
    isOn:boolean,
    text:string,

    onChange:(value:boolean)=> void;
}

const CustomSwitch = ({isOn,text,onChange}:Props) => {


    return (
    <View style={style.switchRow}>
        
        {
            text && <Text style={{color:colors.text}}>{text}</Text> 
        }
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={Platform.OS ==='android' ? colors.primary:''}
          ios_backgroundColor="#3e3e3e"
          onValueChange={onChange}
          value={isOn}
        />
    </View>
  )
}

const style = StyleSheet.create({
    switchRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:5
    }
})
export default CustomSwitch