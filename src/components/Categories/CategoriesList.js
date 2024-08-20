import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { categories } from '../../data/dataArray'
import { getNumberOfRecipes } from '../../data/dummyApi'
import styles from './Styles'
const CategoriesList = () => {
    const renderItem=({item})=>(
       <TouchableOpacity>
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

