import React, { useState, useEffect} from 'react';
//import SplashScreen from 'react-native-splash-screen';
import {TouchableOpacity, View, Text, Image, Modal, Alert} from 'react-native';
import {styles} from './styles/styles'

const App = () => {
  const [modalOpen, setModalOpen] = useState(true)
  const [genre, setGenre] = useState({icon: require("./assets/default.png"), name: 'Hybrid Genre'})

  var firstGenre = ""
  var secondGenre = ""
  const errorMessage = "You can't calculate two of the same genres! Please try again."

  const onClickHandler = () => {
    if (firstGenre == "pop") {
      if (secondGenre == "pop") {
        Alert.alert(errorMessage)
      }
      else if (secondGenre == "intl") {
        setGenre({icon: require("./assets/hybrids/kpop.png"), name:'K-Pop'})
      }
      else if (secondGenre == "indie") {
        setGenre({icon: require("./assets/hybrids/indie_pop.png"), name:'Indie Pop'})
      }
      else if (secondGenre == "electro") {
        setGenre({icon: require("./assets/hybrids/electro_pop.png"), name:'Electro Pop'})
      }
    }
    
    else if (firstGenre == "intl"){
      if (secondGenre == "intl") {
        Alert.alert(errorMessage)
      }
      else if (secondGenre == "pop") {
        setGenre({icon: require("./assets/hybrids/kpop.png"), name:'K-Pop'})
      }
      else if (secondGenre == "indie") {
        setGenre({icon: require("./assets/hybrids/brazil_indie.png"), name:'Brazilian Indie'})
      }
      else if (secondGenre == "electro") {
        setGenre({icon: require("./assets/hybrids/electro_house.png"), name:'Electro House'})
      }
    }

    else if (firstGenre == "indie"){
      if (secondGenre == "indie") {
        Alert.alert(errorMessage)
      }
      else if (secondGenre == "pop") {
        setGenre({icon: require("./assets/hybrids/indie_pop.png"), name:'Indie Pop'})
      }
      else if (secondGenre == "intl") {
        setGenre({icon: require("./assets/hybrids/brazil_indie.png"), name:'Brazilian Indie'})
      }
      else if (secondGenre == "electro") {
        setGenre({icon: require("./assets/hybrids/indietronica.png"), name:'Indietronica'})
      }
    }
    // fix issue with permutations
    
    else if (firstGenre == "electro"){
      if (secondGenre == "electro") {
        Alert.alert(errorMessage)
      }
      else if (secondGenre == "pop") {
        setGenre({icon: require("./assets/hybrids/electro_pop.png"), name:'Electro Pop'})
      }
      else if (secondGenre == "intl") {
        setGenre({icon: require("./assets/hybrids/electro_house.png"), name:'Electro House'})
      }
      else if (secondGenre == "indie") {
        setGenre({icon: require("./assets/hybrids/indietronica.png"), name:'Indietronica'})
      }
    }

  }
  
  // -- splash screen thign idk
  //useEffect(() => {SplashScreen.hide()})
    return(
      <View style={styles.container}>
        <View style={styles.topContainer} elevation={5}>
          <TouchableOpacity 
            style={{    
              borderWidth: 0.5,
              alignItems:'center',
              justifyContent:'center',
              width:30,
              height:30,
              backgroundColor:'#fff',
              borderRadius:50,
              marginTop: 25,}}
              onPress={() => setModalOpen (true)}>
            <Text>?</Text>
          </TouchableOpacity>
          <Text style={{fontSize: 35, marginTop: 15, marginLeft: 15,}}>Genre Calculator</Text>
          <Text style={{fontSize: 13, marginTop:10}}>Calculate two genres and receive a hybrid recommendation!</Text>
        </View>
        
        {/* First Row - Image buttons*/}
        <Text style={styles.headingText}>First Genre</Text>

        <View style={styles.buttonGroup}>
          <View style={styles.buttonRow}>
            {/* set firstGenre to "pop" */}
            <TouchableOpacity onPress={() => firstGenre = "pop"}> 
              <Image source={require("./assets/pop.png")} style={styles.buttonImage}/>
            </TouchableOpacity>
            <Text style = {styles.buttonText}>Pop</Text>
          </View>
          

          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={() => firstGenre = "intl"}>          
              <Image source={require("./assets/intl.png")} style={styles.buttonImage}/>
            </TouchableOpacity>
            <Text style = {styles.buttonText}>International</Text>
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={() => firstGenre = "indie"}>          
              <Image source={require("./assets/indie.png")} style={styles.buttonImage}/>
            </TouchableOpacity>
            <Text style = {styles.buttonText}>Indie</Text>
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={() => firstGenre = "electro"}> 
              <Image source={require("./assets/electro.png")} style={styles.buttonImage}/>
            </TouchableOpacity>
            <Text style = {styles.buttonText}>Electro</Text>
          </View>
          
        </View>
        
        {/* Second Row - Image buttons*/}
        <Text style={styles.headingText}>Second Genre</Text>

        <View style={styles.buttonGroup}>
          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={() => secondGenre = "pop"}>       
              <Image source={require("./assets/pop.png")} style={styles.buttonImage}/>
            </TouchableOpacity>
            <Text style = {styles.buttonText}>Pop</Text>
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={() => secondGenre = "intl"}>          
              <Image source={require("./assets/intl.png")} style={styles.buttonImage}/>
            </TouchableOpacity>
            <Text style = {styles.buttonText}>International</Text>
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={() => secondGenre = "indie"}>          
              <Image source={require("./assets/indie.png")} style={styles.buttonImage}/>
            </TouchableOpacity>
            <Text style = {styles.buttonText}>Indie</Text>
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={() => secondGenre = "electro"}> 
              <Image source={require("./assets/electro.png")} style={styles.buttonImage}/>
            </TouchableOpacity>
            <Text style = {styles.buttonText}>Electro</Text>
          </View>
          
        </View>

        {/* // calculate button */}
        {/* onpress: show calculated genre */}
        
        <View style={{flex: 0.1, paddingHorizontal: 80}}>
          <TouchableOpacity onPress={onClickHandler} style={{borderRadius: 10,  backgroundColor: 'blue',}}>
              <Text style={{
                fontSize: 35,
                alignSelf: 'center',
              }}>Calculate!</Text>
            </TouchableOpacity>
        </View>
          
        
        <View style={styles.outputBox}>
          <Image source={genre.icon} style={{alignSelf:'center', width: 100, height: 100, marginTop: 20}}/>
          <Text style={{alignSelf: 'center', fontSize: 30}}>{genre.name}</Text>
          {/* something something useState */}
        </View>

              {/*POPUP MODAL FOR FIRST TIME*/}
        <Modal
        animationType="slide"
        visible={modalOpen}r
        style={{flex: 0.5,
          backgroundColor: 'rgba(0,0,0,0.5)',
          justifyContent: 'center',
          alignSelf: 'center',}}>

            <View style={styles.modalContainer}>

            {/* close button */}
            <TouchableOpacity onPress={() => setModalOpen (false)} style={{alignSelf: 'auto'}}>
              <Text>Guh</Text>
            </TouchableOpacity>

              <Text style={styles.modalText}>Welcome to Genre Calculator!</Text>
              <Text>insert a screenshot here or something</Text>
              <Text>Select two of the genres you want to combine</Text>
              <Text>Click the "Calculate!" button to see the hybrid genre</Text>
              <Text>NOTE: You can't combine two of the same genres.</Text>
              
            </View>
        </Modal>

      </View>
    )
}

export default App;