import { View, Text, FlatList, Pressable, Alert, SafeAreaView,ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import AntDesign from '@expo/vector-icons/AntDesign';
import Animated,{FadeInOut} from 'react-native-reanimated';
;
const CalendarComponent = () => {

  const [selectedDates, setSelectedDates] = useState([]);

  const onDayPress = (day) => {
    if(!selectedDates.includes(day.dateString)){
    setSelectedDates((prevDates) => [...prevDates, day.dateString]);
    }
    else{
      Alert.alert("Date exist,'Date has been already selected'")
    }
  };

  const onRemoveClick=(item)=>{
   setSelectedDates(val=>val.filter(temp=>temp!==item))
  }

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", gap: 10}}>
    <Animated.View entering={FadeInOut} >
      <ScrollView>
      <Animated.View entering={FadeInOut}>
      <Text style={{ fontWeight: "bold", fontSize: 20, textAlign: "center" }}>Calendar</Text>
      </Animated.View>
      <Calendar onDayPress={onDayPress} />
      <Text style={{ fontWeight: "bold", fontSize: 16, marginTop: 20 }}>Selected Dates:</Text>
      <FlatList
        data={selectedDates}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View  style={{flex:1,justifyContent:"space-between",flexDirection:"row",padding:10}}>
          <Text style={{ fontSize: 16, padding: 5,fontWeight:"bold" }}>{item}</Text>
          <Pressable onPress={()=>onRemoveClick(item)}><AntDesign name="delete" size={24} color="red" /></Pressable>
          </View>
        )}
      />
      </ScrollView>
    </Animated.View>
    </SafeAreaView>
  );
};

export default CalendarComponent;
