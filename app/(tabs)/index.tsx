import { View, Text, Image, StyleSheet, Pressable, ScrollView,Dimensions } from 'react-native';
import React from 'react';
import Main from "../../component/Main";
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import Animated,{FadeInDown} from 'react-native-reanimated';





const { width, height } = Dimensions.get('window');


const Index = () => {


  function handleClick() {
    router.push("/profile");
  }

  return (
    <SafeAreaView style={{ flex: 1, padding: 20, gap: 10 }}>
      <Animated.View entering={FadeInDown} style={styles.container}>
        <View>
          <Text style={styles.header1}>Good Morning Marry</Text>
          <Text style={styles.header2}>Week Plan</Text>
        </View>
        <Pressable onPress={handleClick}>
          <Image source={require("../../assets/images/profile/profile.jpg")} style={styles.img} />
        </Pressable>
      </Animated.View>
      <Animated.View entering={FadeInDown} style={{ flex: 1 }}>
        <Main />
      </Animated.View>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  safearea:{
    flex:1,
   padding:20
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
   alignItems:"center"
  },
  header1: {
    color: "gray",
    fontSize:width<600?16 :20,
  },
  header2: {
    fontSize:width<600?24:30,
  },
  img: {
    width:width<600?80:100,
    height:width<600?80:100,
    borderRadius: 50,
  },
});
