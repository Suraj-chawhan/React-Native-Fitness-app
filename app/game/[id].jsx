import { View, Text,Image } from 'react-native'
import React from 'react'
import {useLocalSearchParams, useRouter}  from "expo-router"
import games from "../../api/Games"
import Animated,{FadeInUp} from 'react-native-reanimated';
const Gam = () => {

    const{id}=useLocalSearchParams()
    const gameId = id ? parseInt(id.replace(/\[|\]/g, ''), 10) : null;
  return (
    <Animated.View entering={FadeInUp} style={{flex:1,justifyContent:"center",alignItems:"center",gap:15,margin:10}}>
      <Image source={games[gameId-1].img}  style={{width:300,height:300,borderRadius:30}} />
      <Text style={{fontSize:20,fontWeight:'bold'}}>{games[gameId-1].description}</Text>
    </Animated.View>
  )
}

export default Gam