import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {recipes} from '../../data/dataArray';
import ImagePath from '../../constants/ImagePath';
import styles from './Styles';
import {getCategoryById, getCategoryName, getRecipes} from '../../data/dummyApi';
import { useNavigation } from '@react-navigation/native';
const RecipeList = ({navigation,route}) => {
 
  const onPressRecipe = (item) => {
    navigation.navigate("details", { item });
  };
    let  item=route?.params?.category
    let recipeArray=getRecipes(item.id)
  const renderItem = ({item}) => (
    <TouchableOpacity onPress={()=>onPressRecipe(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{uri: item.photo_url}} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View>
      <FlatList
      numColumns={2}
        data={recipeArray}
        renderItem={renderItem}
        keyExtractor={(item) => `${item.recipeId}`}
      />
    </View>
  );
};

export default RecipeList;
