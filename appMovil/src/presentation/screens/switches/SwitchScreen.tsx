import React, { useState } from 'react'
import { Text } from 'react-native'
import CustomView from '../../components/ui/CustomView'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import CustomSwitch from '../../components/ui/CustomSwitch'
import Separator from '../../components/ui/Separator'


const SwitchScreen = () => {


  const [state,setState] = useState({
    isAcitve:true,
    isHungry:false,
    isHappy:true,
  })

  return (
    <CustomView style={{marginTop:100,paddingHorizontal:10}}>
      <Text>SwitchScreen</Text> 
        <Card>
          <Button
           text='Click me!'
           onPress={()=>{
           }}
           />
          <Separator/>
          <CustomSwitch 
              isOn={state.isAcitve}
              onChange={(value)=> setState({...state, isAcitve:value})}
              text='¿esta activo?'
          />
          <Separator/>
          <CustomSwitch 
              isOn={state.isHungry}
              onChange={(value)=> setState({...state, isHungry:value})}
              text='¿esta enojado?'
          />
          <Separator/>
          <CustomSwitch 
              isOn={state.isHappy}
              onChange={(value)=> setState({...state, isHappy:value})}
              text='¿esta feliz?'
          />
        </Card>
    </CustomView>
  )
}

export default SwitchScreen