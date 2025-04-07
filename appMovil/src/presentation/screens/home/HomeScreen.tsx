import React from 'react'
import { View } from 'react-native'
import { ScrollView, Text } from 'react-native-gesture-handler'
import { RocketIcon } from '../../icons/Icons'
import { globalStyles } from '../../../config/theme/theme';
import Title from '../../components/ui/Title';
import { animationItems, menuItems, uiMenuItems } from '../../components/ui/MenuItemArray';
import MenuItem from '../../components/ui/MenuItem';



const HomeScreen = () => {
  
  return (
    <View style={globalStyles.mainContainer}>
        <View style={globalStyles.globalMargin}>
            <ScrollView>
                
                <Title text='Este es el menu' safe/>
                
                <View style={{marginTop:30}}/>
               {/*  // 01-animationMenuItems */}
                {
                    animationItems.map((item,index) => (
                    <MenuItem 
                    key={index}
                    {...item}
                    isFirst={index ==0}
                    isLast={index ==menuItems.length - 1}
                    />
                  ))
                 }
                
                <View style={{marginTop:30}}/>
                    {/*  // 03- uiMenuItems */}
                  {
                      uiMenuItems.map((item,index) => (
                      <MenuItem 
                      key={index}
                      {...item}
                      isFirst={index ==0}
                      isLast={index ==menuItems.length - 1}
                      />
                    ))
                  }
                  
                <View style={{marginTop:30}}/>
                {/*    // 02-menuItems */}
                  {
                    menuItems.map((item,index) => (
                    <MenuItem 
                    key={index}
                    {...item}
                    isFirst={index ==0}
                    isLast={index ==menuItems.length - 1}
                    />
                  ))
                 }
                <View style={{marginTop:30}}/>

            </ScrollView>
        </View>
    </View>
  )
}

export default HomeScreen