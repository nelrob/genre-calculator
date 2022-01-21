import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    fontFamily: 'NexaRegular',
  },
  topContainer: {
    flex: 0.3,
    backgroundColor: 'red',
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingBottom: 10,

  },
  
  headingText:{
    fontSize: 30,
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
    backgroundColor: 'pink',
    flexWrap: "wrap",
    paddingHorizontal: 3,
    paddingVertical: 3,
  },
  buttonImage: {
    alignItems:'center',
    justifyContent:'center',
    width:60,
    height:60,
  },
  buttonRow: {
    backgroundColor: "white",
    marginVertical: 10,
    borderRadius: 50,
  },
  modalContainer: {
    flex:1,
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  modalText:{

  }
});