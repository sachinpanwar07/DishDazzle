import React, {useLayoutEffect} from 'react';
import {FlatList, Text, View, TouchableHighlight, Image} from 'react-native';
import styles from './styles';
import {getCategoryName} from '../../data/dummyApi';
import {recipes} from '../../data/dataArray';
export default function HomeScreen(props) {
  const {navigation} = props;
  const onPressRecipe = item => {
    navigation.navigate('details', {item});
  };
  const renderRecipes = ({item}) => (
    <TouchableHighlight
      onPress={() => onPressRecipe(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{uri: item.photo_url}} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );
  return (
    <View>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={recipes}
        renderItem={renderRecipes}
        keyExtractor={item => `${item.recipeId}`}
      />
    </View>
  );
}
