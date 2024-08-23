import { StyleSheet } from "react-native";
import color from "../../constants/color";
 
const styles= StyleSheet.create({
    container: {
      marginTop:10,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    carouselItem: {
      position:"relative",
      height:300,
      justifyContent: 'center',
    
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    paginationContainer: {
     
      position:"absolute",
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems:"center",
      zIndex: 1,
      bottom:-50,
      left:0,
      right:0,
      
    },
    dotStyle: {
      width: 10,
      height: 10,
      borderRadius: 5,
      marginHorizontal:8,
      backgroundColor: 'blue',
    },
    activeDot: {
      backgroundColor: 'white',
    },
    inactiveDot: {
      backgroundColor: color.whiteColorOpacity40,
    },
    backButtonStyle:{
      position:"absolute",
      top:45,
      zIndex:2,
      backgroundColor:color.whiteColor,
      left:10,
      borderRadius:15,
      justifyContent:"center",
      padding:10,
      borderRadius:30


    },
    backButtonimg:{
      width:20,
      height:20,
      resizeMode:"contain"
    },
    detailContainer:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      gap:12
    },
    titlestyle:{
      color:color.blackColor,
      fontSize:30,
      fontWeight:"bold"
    },
    categorystyle:{
      fontSize:20,
      color:color.greenColor,
    },
    viewIngredientbtn:{
      backgroundColor:color.whiteColor,
      borderWidth:1,
      borderColor:color.greenColor,
      width:"80%",
      justifyContent:"center",
      alignItems:"center",
      borderRadius:30,
      height:50

    },
    timeetxtStyle:{
      fontSize:16,
      fontWeight:"bold",
      color:color.blackColor

    },
    viewIngredientbtntxt:{
    fontSize:20,
    color:color.greenColor
    },
    descriptionstyle:{
      fontSize:18,
      color:color.blackColor,
      textAlign:"center",
      flexWrap:"wrap",
      padding:12
    }

  });
  export default styles
  