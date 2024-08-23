import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,  
    shadowColor: '#000',  
    shadowOffset: { width: 0, height: 2 },  
    shadowOpacity: 0.8,  
    shadowRadius: 2,  
  },
  photo: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    padding: 10,
  },
  category: {
    fontSize: 14,
    color: '#999',
    paddingLeft: 10,
    paddingBottom: 10,
  },
});

export default styles;
