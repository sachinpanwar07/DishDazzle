import { StyleSheet } from "react-native";
 
const styles= StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    carouselItem: {
      backgroundColor: 'lightgray',
      borderRadius: 8,
      height: 250,
      padding: 50,
      justifyContent: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    paginationContainer: {
      paddingVertical: 8,
    },
    dotStyle: {
      width: 10,
      height: 10,
      borderRadius: 5,
      marginHorizontal: 8,
      backgroundColor: 'blue',
    },
  });
  export default styles
  