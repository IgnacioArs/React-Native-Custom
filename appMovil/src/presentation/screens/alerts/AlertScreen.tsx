import React from 'react'
import { Alert, View } from 'react-native'
import CustomView from '../../components/ui/CustomView'
import { globalStyles } from '../../../config/theme/theme'
import Title from '../../components/ui/Title'
import Button from '../../components/ui/Button'
import { showPromp } from '../../../config/adapters/promp.adapter'

const AlertScreen = () => {

    const createTwoButtonAlert = () =>
        Alert.alert('Primer Boton', 'Alerta con dos botones opcion', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
    
    const createThreeButtonAlert = () =>
        Alert.alert('Segundo Boton', 'Alerta con tres botones opcion', [
          {
            text: 'Ask me later',
            onPress: () => console.log('Ask me later pressed'),
          },
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);


      const onShowPromp = () => {
        showPromp({
          titulo:'Este es el titulo',
          subTitulo:'mira mi subtitulo',
          buttons:[
            {text:'boton',onPress:()=> {console.log("activando esto")}}
          ],
          placeHolder:'Placeholder es!'
        })
      }

    
  return (
    <CustomView style={globalStyles.globalMargin}>
       <Title safe text="Alertas"/>
        
        <View style={{height:5,marginTop:5}}/>
        <Button
         text='alertas 2-Botones'
         onPress={createTwoButtonAlert} 
        />
        
        <View style={{height:5,marginTop:5}}/>
        <Button
         text='alertas 3-Botones'
         onPress={createThreeButtonAlert} 
        />
        
        <View style={{height:5,marginTop:5}}/>
        <Button
         text='Prompt'
         onPress={onShowPromp} 
        />
    
    </CustomView >
  )
}

export default AlertScreen