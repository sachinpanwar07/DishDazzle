import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import {getAllIngredients, getIngredientName} from '../../data/dummyApi';

const IngredientCompo = ({navigation, route}) => {
  const item = route?.params?.ingredients;
  const ingredientArray = getAllIngredients(item);

  const onPressIngredient = item => {
    let name = getIngredientName(item.ingredientId);
    let ingredient = item.ingredientId;
    navigation.navigate('IngredientRecipe', {ingredient, name});
  };
  const renderIngredient = ({item}) => (
    <TouchableOpacity onPress={() => onPressIngredient(item[0])}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{uri: item[0].photo_url}} />
        <Text style={styles.title}>{item[0].name}</Text>
        <Text style={{color: 'grey'}}>{item[1]}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View>
      <FlatList
        data={ingredientArray}
        renderItem={renderIngredient}
        keyExtractor={item => `${item.recipeId}`}
        numColumns={3}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default IngredientCompo;
