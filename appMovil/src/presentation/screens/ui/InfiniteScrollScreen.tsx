import React, { useState } from 'react'
import CustomView from '../../components/ui/CustomView'
import Title from '../../components/ui/Title'
import { FlatList } from 'react-native-gesture-handler'
import { ActivityIndicator, Image, View} from 'react-native'
import { colors } from '../../../config/theme/theme'
import FaInImage from '../../components/ui/FainImage'


const InfiniteScrollScreen = () => {
  
  const [number,setNumber] = 
  useState([0,1,2,3,4,5])

  const loadMore =()=> {
    const newArray = Array.from({length:5},(_,i)=>number.length + i)
    setTimeout(() => {
        setNumber([...number,...newArray])
    }, 3000);
    console.log("loading more")
  }
  
    return (
    <View style={{backgroundColor:'black'}}>

        <FlatList 
            onEndReached={loadMore}
            onEndReachedThreshold={0.6}
            data={number}
            keyExtractor={(item)=>item.toString()}
            renderItem={({item}) => 
            <ListItem number={item} />}

            ListFooterComponent={()=>
                (
                  <View style={{height:150,justifyContent:'center'}}>
                      <ActivityIndicator size={40} color={colors.primary}/>
                  </View>
                )
            }
        />
    </View>
  )
}

interface ListItemProps{
  number:number
}

const ListItem = ({number}:ListItemProps) => {

   return (
    <FaInImage
     uri={`https://picsum.photos/id/${number}/500/400`}
     style={{
      height: 400,
      width: '100%',
    }}
    />
   )
}

export default InfiniteScrollScreen