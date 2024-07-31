import { View, Text, StyleSheet, Image,Pressable } from 'react-native';
import React from 'react';
import {router} from "expo-router"
import Animated,{FadeInUp} from 'react-native-reanimated';
const Profile = () => {

const handleHelp=()=>router.push("/help")

const handleAbout=()=>router.push("/about")
  return (
    <Animated.View entering={FadeInUp} style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require("../../assets/images/profile/profile.jpg")}
          style={styles.img}
        />
        <Text style={styles.headerText}>Profile</Text>
      </View>
      <View style={styles.optionsContainer}>
        <Pressable style={styles.optionButton} onPress={handleHelp}>
          <Text style={styles.optionText}>Help</Text>
        </Pressable>
        <Pressable style={styles.optionButton} onPress={handleAbout}>
          <Text style={styles.optionText}>About</Text>
        </Pressable>
      </View>
    </Animated.View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#eee",
    justifyContent:"center",
   
  },
  img:{
  width:100,
  height:100,
  borderRadius:50,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', 
  },
  optionsContainer: {
    marginTop: 20,
  },
  optionButton: {
    backgroundColor: 'blue',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  optionText: {
    color: '#fff', 
    fontSize: 18,
  },
});

