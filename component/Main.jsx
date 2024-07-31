import { View, Text, FlatList, StyleSheet, Image, Pressable } from 'react-native';
import React,{useEffect} from 'react';
import Data from '../api/FlatList';
import { FontAwesome } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { router } from 'expo-router';
import {useState} from "react"
import Heart from "../api/Heart"
import games from "../api/Games"
import Animated, { FadeInDown } from 'react-native-reanimated';
const Main = () => {


const [data,setData]=useState(Data)
const [storeCategory,setStoreCategory]=useState("recommended")
const [dataShow,setDataShow]=useState(null)

  function handleCall(id){
  
    if(storeCategory==="heart"){
      router.push(`/heart/[${id}]`);
    }
    else if(storeCategory==="games"){
      router.push(`/game/[${id}]`);
    }
    else{
    router.push(`/data/[${id}]`, { id: id });
    }
  }
  

  useEffect(()=>{

  setDataShow(data)


  },[data])

  function call(str){
   if(str==="heart"){
  setStoreCategory("heart")
  setData(Heart)
   }
   else if(str==="games"){
    setStoreCategory("games")
    setData(games)
   }
   else{
    setStoreCategory("recommended")
    setData(Data)
   }
  }


  if(!data){
    return  <Text style={{flex:1,justifyContent:"center",alignItems:"center"}}>Loading</Text>
  }


  return (
    <View style={styles.container}>
      <Animated.View entering={FadeInDown} style={styles.top}>
        <View style={[styles.topBox,storeCategory==="recommended" && styles.active]}>
          <View style={[styles.topLine,storeCategory==="recommended" && styles.activeLine]}></View>
          <View  style={{top:"39%",left:"17%"}} >
            <Pressable onPress={()=>call("recommended")}>
              <View style={{flexDirection:"row",gap:5,alignItems:"center"}}>
          <Feather name="sunrise" size={24} color={storeCategory==="recommended"?"red":"black"} />
          <Text style={{fontWeight:"bold",color:`${storeCategory==="recommended"?"red":"black"}`}}>Morning Workout</Text>
          </View>
          </Pressable>
          </View>
        </View>
        <Pressable style={[styles.topBoxSmall,storeCategory==="games" && styles.active]}  onPress={()=>call("games")}>
          <View style={[styles.topLineSmall,storeCategory==="games" && styles.activeLine]}></View>
          <FontAwesome6 name="basketball" size={24} color={storeCategory==="games"?"red":"black"} style={{top:"50%",left:"37%"}} />
        </Pressable>
        <Pressable style={[styles.topBoxMedium,,storeCategory==="heart" && styles.active]} onPress={()=>call("heart")}>
          <View style={[styles.topLineMedium,storeCategory==="heart" && styles.activeLine]}></View>
       
          <AntDesign name="hearto" size={24} color={storeCategory==="heart"?"red":"black"} style={{top:"50%",left:"38%"}}/>
         </Pressable>
      </Animated.View>
      <View style={styles.bottom}>
        <Text style={styles.title}>Recommended Today</Text>
        <FlatList
          data={dataShow}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          renderItem={({ item, index }) => {
            const heights = [150, 250, 250, 150];
            const height = heights[index % heights.length];
            return (
              <Pressable onPress={()=>handleCall(item.id)} style={[styles.item, { height }]}>
               <Image source={item.img} style={styles.image} />
                <Text style={styles.timing }>{item.timing}</Text>
                <View style={styles.textContainer}>
                  <Text style={{color:"white"}}>{item.title}</Text>
                  <Text style={{color:"white"}}>{item.work}</Text>
                </View>
              </Pressable>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"pink",
    padding:0,
    marginHorizontal:0,
  },
  top: {
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginHorizontal: 0,
  },
  topBox: {
    backgroundColor:"yellow",
    width: 180,
    height: 100,
    position:"relative",
  },
  topLine: {
    position:"absolute",
    top: 0,
    height: 5,
    width: '100%',
    backgroundColor:"orange",
  },
  topBoxSmall: {
    backgroundColor:"purple",
    width: 60,
    height: 100,
    position:"relative",
  },
  topLineSmall: {
    position:"absolute",
    top: 0,
    height: 5,
    width:"100%",
    backgroundColor:"blue",
  },
  topBoxMedium: {
    backgroundColor:"#8e6",
    width: 110,
    height: 100,
    position:"relative",
  },
  topLineMedium: {
    position:"absolute",
    top: 0,
    height: 5,
    width:"100%",
    backgroundColor:"#891",
  },
  bottom: {
    flex: 1,
    paddingHorizontal:10,
  },
  title: {
    fontSize:20,
    fontWeight:"bold",
    marginBottom:10,
  },
  item: {
    flex: 1,
    backgroundColor:"blue",
    borderRadius:20,
    margin:5,
    shadowColor:"#000",
    elevation:5,
  },
  image: {
    width:"100%",
    height:"100%",
    borderRadius: 20,
  },
  timing: {
    position:"absolute",
    top:10,
    right:10,
    color:"white",
  },
  textContainer: {
    position:"absolute",
    bottom: 10,
    left: 10,
    flexDirection:"column",
    alignItems:"center",
  },
  active: {
    backgroundColor:"pink",
  },
  activeLine: {
    backgroundColor:"red",
  },
});
