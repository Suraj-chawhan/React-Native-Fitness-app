import { View, Text, FlatList ,Image} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import stretch from '../../api/Stretch';
import rope from '../../api/Ropes';
import aero from '../../api/Aero';
import upper from '../../api/Upperbody';
import Animated,{FadeInDown} from 'react-native-reanimated';

const Data = () => {
  const { id } = useLocalSearchParams();

  const [val, setVal] = useState(null);

  useEffect(() => {
    
    switch (id) {
      case "[1]":
        setVal(upper);
        break;
      case "[2]":
        setVal(aero);
        break;
      case "[3]":
        setVal(rope);
        break;
      case "[4]":
        setVal(stretch);
        break;
      default:
        setVal(null);
        break;
    }
  }, [id]);

  if (!val) {
    return <Text>Error {id}</Text>;
  }

  return (
    <Animated.View entering={FadeInDown}style={{ flex: 1,padding:10}}>
      <FlatList
        data={val}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <View style={{flex:1,justifyContent:"center",alignItems:"center",margin:10}}>
              <Text style={{fontSize:17,fontWeight:"bold",margin:10}}>{item.title}</Text>
              <Image source={item.img}  style={{width:150,height:150,borderRadius:20,boxShadown:"1px 1px black",marginHorizontal:10}}  />
              <Text>{item.description}</Text>
            </View>
          );
        }}
        
      />
    </Animated.View>
  );
};

export default Data;
