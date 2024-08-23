import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import Categories from '../screens/Categories';
import ImagePath from '../constants/ImagePath';
import color from '../constants/color';
import SeacrchScreen from '../screens/SerachBar/SeacrchScreen';
const Tab=createBottomTabNavigator();
const BotttomTabNavigation = () => {
  return (
    <>
      <Tab.Navigator
      
      >
        <Tab.Screen  name='Home' component={HomeScreen}
         options={{title:"Home",tabBarIcon:({focused})=><Image source={ImagePath.ic_home} screenOptions={{headerShown: false}}  style={{width:30,height:30,tintColor:focused ? color.blackColor:color.gray2}}/>,
         tabBarActiveTintColor:color.blackColor,
         tabBarInactiveTintColor:color.gray2
        }}
        />
        <Tab.Screen
         name='Categories'
         component={Categories}
         options={{title:"Categories",tabBarIcon:({focused})=><Image source={ImagePath.ic_category}  screenOptions={{headerShown: false}} style={{width:30,height:30,tintColor:focused ? color.blackColor:color.gray2}}/>,
         tabBarActiveTintColor:color.blackColor,
         tabBarInactiveTintColor:color.gray2
        }}
        />
        <Tab.Screen name='Search' component={SeacrchScreen}
         options={{title:"Search",tabBarIcon:({focused})=><Image source={ImagePath.ic_search} screenOptions={{headerShown: false}} style={{width:30,height:30,tintColor:focused ? color.blackColor:color.gray2}}/>,
         tabBarActiveTintColor:color.blackColor,
         tabBarInactiveTintColor:color.gray2
        }}
        />
      </Tab.Navigator>
    </>
  )
}

export default BotttomTabNavigation

const styles = StyleSheet.create({})