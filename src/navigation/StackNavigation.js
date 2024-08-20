import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BotttomTabNavigation from './BotttomTabNavigation';
import RecipeDetail from '../components/RecipeDetails/RecipeDetail';

const StackNavigation = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tab" component={BotttomTabNavigation} options={{headerShown:false}}/>
        <Stack.Screen name='details' component={RecipeDetail}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation