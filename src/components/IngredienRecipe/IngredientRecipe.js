import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView
} from 'react-native';
import React from 'react';
import styles from './styles';
import { getCategoryName, getIngredientUrl, getRecipesByIngredient } from '../../data/dummyApi';
const IngredientRecipe = ({navigation, route}) => {
  const ingredientId = route.params?.ingredient;
  const ingredientUrl = getIngredientUrl(ingredientId);
  const ingredientName = route.params?.name;
  const onPressRecipe = (item) => {
    navigation.navigate("details", { item });
  };

  const renderRecipes = ({item}) => (
    <TouchableHighlight
     
      onPress={() => onPressRecipe(item)}>
      <TouchableHighlight
       
        onPress={() => onPressRecipe(item)}>
        <View style={styles.container}>
          <Image style={styles.photo} source={{uri: item.photo_url}} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.category}>
            {getCategoryName(item.categoryId)}
          </Text>
        </View>
      </TouchableHighlight>
    </TouchableHighlight>
  );
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={{ borderBottomWidth: 0.4, marginBottom: 10, borderBottomColor: "grey" }}>
        <Image style={styles.photoIngredient} source={{ uri: "" + ingredientUrl }} />
      </View>
      <Text style={styles.ingredientInfo}>Recipes with {ingredientName}:</Text>
      <View>
        <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={getRecipesByIngredient(ingredientId)} renderItem={renderRecipes} keyExtractor={(item) => `${item.recipeId}`} />
      </View>
    </ScrollView>
  );
};

export default IngredientRecipe;
