import React, { useState } from 'react'
import { Modal,Platform,View } from 'react-native'
import CustomView from '../../components/ui/CustomView'
import Title from '../../components/ui/Title'
import Button from '../../components/ui/Button'

const ModalScreen = () => {

    const [isVisible,setIsVisible] = useState(false);
  return (
    <CustomView margin>
            <Title text='ModalScreen' safe />
            
                <Button 
                text='Abrir Modal'
                onPress={()=> setIsVisible(true)}
                />

                <Modal 
                visible={isVisible}
                animationType='slide'
                >
                <View style={{
                    flex:1,
                    backgroundColor:'rgba(0,0,0,1)'
                }}>

                <View style={{paddingHorizontal:10}}>
                     <Title text='Modal Content' safe/>
                </View>

                <View style={{flex:1}}/>

                <Button 
                text='Cerrar Modal'
                onPress={()=> setIsVisible(false)}
                style={{
                height:Platform.OS ==='android'?40:40,
                borderRadius:0,
                }}
            
                />

                </View>
            </Modal>
    </CustomView>
  )
}

export default ModalScreen