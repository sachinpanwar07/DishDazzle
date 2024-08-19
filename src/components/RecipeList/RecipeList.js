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
import {getCategoryById, getCategoryName} from '../../data/dummyApi';
const RecipeList = () => {
  const renderItem = ({item}) => (
    <TouchableOpacity>
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
        data={recipes}
        renderItem={renderItem}
        keyExtractor={(item) => `${item.recipeId}`}
      />
    </View>
  );
};

export default RecipeList;
