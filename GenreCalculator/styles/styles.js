import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    
    fontFamily: 'Outfit-VariableFont_wght',
  },
  topContainer: {
    flex: 0.23,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    //paddingBottom: 10,
    width: '100%',
    borderRadius: 2,
    //backgroundColor: 'red',
  },
  
  headingText:{
    paddingLeft: 10,
    fontSize: 20,
  },

  buttonText: {
    flex: 1,
    alignSelf: "center",
  },
  buttonGroup: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    //backgroundColor: 'pink',
    flexWrap: "wrap",
    paddingHorizontal: 3,
    paddingVertical: 3,
    borderRadius: 10,
  },
  buttonImage: {
    justifyContent:'center',
    width:80,
    height:80,
  },
  buttonRow: {
    backgroundColor: "white",
    marginVertical: 10,
    borderRadius: 50,
  },
  modalContainer: {
    flex:0.8,
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  modalText:{
    paddingHorizontal: 10,
  },

  outputBox: {
    flex: 0.4,
    backgroundColor: 'yellow',
  },
});