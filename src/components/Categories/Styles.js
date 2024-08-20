import { StyleSheet } from "react-native";
import color from "../../constants/color";

const styles=StyleSheet.create({
  container:{
    flex:1,
     margin:10,
    justifyContent:"center",
    alignItems:"center",
    borderWidth:0.5,
    borderRadius:20,
    marginBottom:10
    

  },

  photo:{
   width:"100%",
   height:160,
   borderRadius:20

  },
  textStyle:{
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
    marginTop: 8

  },
  textStyle1:{
    fontSize:20,
    color:color.blackColor,
    

  }
    
})
export default styles