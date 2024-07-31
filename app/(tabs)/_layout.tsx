import { Tabs } from 'expo-router';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Fontisto from '@expo/vector-icons/Fontisto';
import { FontAwesome } from '@expo/vector-icons';
import TabIconWithLine from "../../component/TabIconWithLine"

export default function TabLayout() {
  return (
    <Tabs   screenOptions={{
tabBarStyle:{
  borderTopWidth:0,
  
},
    }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIconWithLine focused={focused}>
              <FontAwesome name="home" size={24} color={focused ? "#fca510" : "black"} />
            </TabIconWithLine>
          ),
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          tabBarLabel: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIconWithLine focused={focused}>
                 <FontAwesome name="calendar-o" size={24} color={focused ? "#fca510" : "black"} />
            </TabIconWithLine>
          ),
        }}
      />
      <Tabs.Screen
        name="chart"
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <TabIconWithLine focused={focused}>
              <Fontisto name="pie-chart-1" size={24} color={focused ? "#fca510" : "black"} />
            </TabIconWithLine>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIconWithLine focused={focused}>
              <FontAwesome name="user" size={24} color={focused ? "#fca510" : "black"} />
            </TabIconWithLine>
          ),
        }}
      />
    </Tabs>
  );
}


