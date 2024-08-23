import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BotttomTabNavigation from './BotttomTabNavigation';
import RecipeDetail from '../components/RecipeDetails/RecipeDetail';
import IngredientCompo from '../components/Ingredient/IngredientCompo';
import RecipeList from '../components/RecipeList/RecipeList';
import IngredientRecipe from '../components/IngredienRecipe/IngredientRecipe';

const StackNavigation = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tab" component={BotttomTabNavigation} options={{headerShown:false}}/>
        <Stack.Screen name='details' component={RecipeDetail}options={{headerShown:false}}  />
        <Stack.Screen name='ingredients' component={IngredientCompo}options={{headerShown:false}}  />
        <Stack.Screen name='RecipeList' component={RecipeList}/>
        <Stack.Screen name='IngredientRecipe' component={IngredientRecipe} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation