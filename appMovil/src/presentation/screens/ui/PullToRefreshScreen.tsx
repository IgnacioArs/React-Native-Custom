import React, { useState } from 'react'
import Title from '../../components/ui/Title'
import CustomView from '../../components/ui/CustomView'
import { ScrollView } from 'react-native-gesture-handler'
import { RefreshControl } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { colors, globalStyles } from '../../../config/theme/theme'

const PullToRefreshScreen = () => {

  const [isRefreshing,setIsRefreshing] = useState(false);
  
  const {top} = useSafeAreaInsets();

  const onRefresh = () =>{
    setIsRefreshing(true)
    setTimeout(() => {
      setIsRefreshing(false)
    }, 4000);
  }

  return (
    <ScrollView 
    refreshControl={
    <RefreshControl 
    refreshing={isRefreshing} 
    progressViewOffset={top}
    colors={[colors.primary,'brown','green','green']}
    onRefresh={onRefresh}
    style={[globalStyles.mainContainer,globalStyles.globalMargin]}
    />}>
        <CustomView margin>
            <Title text='PullToRefreshScreen' safe/>
        </CustomView>
    </ScrollView>
  )
}

export default PullToRefreshScreen