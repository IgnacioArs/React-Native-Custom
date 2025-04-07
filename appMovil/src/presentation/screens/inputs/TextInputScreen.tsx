import React, { useState } from 'react'

import CustomView from '../../components/ui/CustomView'
import { globalStyles } from '../../../config/theme/theme'
import Title from '../../components/ui/Title'
import Card from '../../components/ui/Card'
import { TextInput } from 'react-native-gesture-handler'
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native'

const TextInputScreen = () => {

const [form,setForm] = useState({
  name:'',
  email:'',
  phone:'',
  textoFinal:''
});

  return (
    <KeyboardAvoidingView behavior={Platform.OS ==='ios'? 'padding':undefined}>
        <ScrollView>
            <CustomView margin>
            <Title text='Text Inputs' safe/>

            <Card>
              
              <TextInput 
                style={globalStyles.input}
                placeholder='Nombre Completo'
                autoCapitalize={'words'}
                autoCorrect={false}
                onChangeText={value => setForm({...form,name:value})}
                />

                <TextInput 
                style={globalStyles.input}
                placeholder='Correo Electronico'
                autoCapitalize={'none'}
                autoCorrect={false}
                keyboardType='email-address'
                onChangeText={value => setForm({...form,email:value})}
                />
                
                <TextInput 
                style={globalStyles.input}
                placeholder='Telefono'
                autoCapitalize={'none'}
                autoCorrect={false}
                keyboardType='phone-pad'
                onChangeText={value => setForm({...form,phone:value})}
                />
            </Card>

            <View style={{height:10}}/>

            <Card>
              <Text>{JSON.stringify(form,null,21)}</Text>
              <Text>{JSON.stringify(form,null,21)}</Text>
              <Text>{JSON.stringify(form,null,21)}</Text>
              <Text>{JSON.stringify(form,null,21)}</Text>
              <Text>{JSON.stringify(form,null,21)}</Text>
              <Text>{JSON.stringify(form,null,21)}</Text>
              <Text>{JSON.stringify(form,null,21)}</Text>
              <Text>{JSON.stringify(form,null,21)}</Text>
              <Text>{JSON.stringify(form,null,21)}</Text>
              <Text>{JSON.stringify(form,null,21)}</Text>
              <Text>{JSON.stringify(form,null,21)}</Text>
              <Text>{JSON.stringify(form,null,21)}</Text>
              <Text>{JSON.stringify(form,null,21)}</Text>
              <Text>{JSON.stringify(form,null,21)}</Text>
              <Text>{JSON.stringify(form,null,21)}</Text>
              <Text>{JSON.stringify(form,null,21)}</Text>
              <Text>{JSON.stringify(form,null,21)}</Text>
              <Text>{JSON.stringify(form,null,21)}</Text>
              <Text>{JSON.stringify(form,null,21)}</Text>
              <Text>{JSON.stringify(form,null,21)}</Text>
              <Text>{JSON.stringify(form,null,21)}</Text>
              <Text>{JSON.stringify(form,null,21)}</Text>
            </Card>

            <View style={{height:50}}/>
              <Card>
                <TextInput 
                  style={globalStyles.input}
                  placeholder='Texto Final'
                  autoCapitalize={'words'}
                  autoCorrect={false}
                  onChangeText={value => setForm({...form,textoFinal:value})}
                  />
              </Card>
            <View style={{height:50}}/>
          </CustomView>

    </ScrollView> 
    </KeyboardAvoidingView>
  )
}

export default TextInputScreen