import { View, Dimensions, Image, TouchableOpacity, StatusBar ,Text, ScrollView} from 'react-native';
import React, { useState } from 'react';
import Carousel from 'react-native-reanimated-carousel';
import styles from './styles';
import ImagePath from '../../constants/ImagePath';
import { getCategoryName, getIngredientName } from '../../data/dummyApi';

const RecipeDetail = ({ navigation, route }) => {
  const width = Dimensions.get('window').width;

  const [activeIndex, setActiveIndex] = useState(0);
  const item  = route?.params?.item;
  const ingredient=getIngredientName(item.categoryId)
  const title=getCategoryName(item.id)


  return (
    <ScrollView style={{ flex: 1 }}>
      
      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        data={item.photosArray} 
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => setActiveIndex(index)}
        style={styles.carouselItem}
        renderItem={({ item: imageUrl }) => (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.backButtonStyle}>
              <Image  source={ImagePath.ic_backArrow}
               style={styles.backButtonimg}
              
              />
            </TouchableOpacity>
            <Image
              source={{ uri: imageUrl }}
              style={{ width: width, height: 600 ,resizeMode:"contain",}}
              resizeMode="contain"
            />
            <View style={styles.paginationContainer}>
          {item.photosArray.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dotStyle,
              index === activeIndex ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
        
      </View>
      
          </View>
          
        )}
      />

    <View style={styles.detailContainer}>
    <Text style={styles.titlestyle}>{item.title}</Text>
     <Text style={styles.categorystyle}>{getCategoryName(item.categoryId)}</Text>
     <View style={{flexDirection:"row"}}>
      <Image source={ImagePath.time} style={{width:10,height:10}}
        
      />
      <Text style={styles.timeetxtStyle}>{item.time}</Text>
     </View>
     <TouchableOpacity style={styles.viewIngredientbtn} onPress={()=>{
       let ingredients = item.ingredients;
       let title = "Ingredients for " + item.title;
       navigation.navigate("ingredients", { ingredients, title });
     }}>
      <Text style={styles.viewIngredientbtntxt}>View ingredient</Text>
     </TouchableOpacity>
     <Text style={styles.descriptionstyle}>{item.description}</Text>
    </View>
    </ScrollView>
  );
};

export default RecipeDetail;
