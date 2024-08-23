import React, { useState } from "react";
import { FlatList, Text, View, Image, TextInput, TouchableHighlight, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import styles from "./styles";
import { getCategoryName, getRecipesByRecipeName, getRecipesByCategoryName, getRecipesByIngredientName } from "../../data/dummyApi";
import ImagePath from "../../constants/ImagePath";

export default function SearchScreen({ navigation }) {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  const handleSearch = (text) => {
    setValue(text);
    let recipeArray1 = getRecipesByRecipeName(text);
    let recipeArray2 = getRecipesByCategoryName(text);
    let recipeArray3 = getRecipesByIngredientName(text);
    let combinedArray = recipeArray1.concat(recipeArray2).concat(recipeArray3);
    let recipeArray = [...new Set(combinedArray)];

    setData(text === "" ? [] : recipeArray);
  };

  const onPressRecipe = (item) => {
    navigation.navigate("details", { item });
  };

  const renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressRecipe(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <KeyboardAvoidingView 
    style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0} 
    >

   
    <View style={{ flex: 1, padding: 10 ,marginTop:40,}}>
     <TouchableOpacity style={styles.searchBarStyle}>
     <TextInput
        style={styles.searchInput}
        placeholder="Search recipes..."
        onChangeText={handleSearch}
        value={value}
        placeholderTextColor="black"
      />
      <Image source={ImagePath.ic_search} style={styles.serachIconstyle}/>
     </TouchableOpacity>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={data}
        renderItem={renderRecipes}
        keyExtractor={(item) => `${item.recipeId}`}
       
      />
    </View>
    </KeyboardAvoidingView>
  );
}
