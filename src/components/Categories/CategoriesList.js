import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { categories } from '../../data/dataArray'
import { getNumberOfRecipes } from '../../data/dummyApi'
import styles from './Styles'
import { useNavigation } from '@react-navigation/native'
const CategoriesList = ({route}) => {
  const navigation=useNavigation()

  const onPressCategory=(item)=>{
    const title = item.name;
    const category = item;
    navigation.navigate("RecipeList", { category, title });
  }
    const renderItem=({item})=>(
       <TouchableOpacity onPress={()=>onPressCategory(item)}>
         <View style={styles.container}>
          <Image source={{uri:item.photo_url}} style={styles.photo}/>
          <Text style={styles.textStyle}>{item.name}</Text>
          <Text style={styles.textStyle1}>{getNumberOfRecipes(item.id)}</Text>
          </View>
       </TouchableOpacity>

    )
  return (
   <FlatList
    data={categories}
    renderItem={renderItem}
    keyExtractor={(item)=>item.id}

    
   />
  )
}

export default CategoriesList

