import React, { useState, useEffect} from 'react';
//import SplashScreen from 'react-native-splash-screen';
import {TouchableOpacity, View, Text, Image, Modal} from 'react-native';
import {styles} from './styles/styles'

const App = () => {
  const [modalOpen, setModalOpen] = useState(true)
  const [genre, setGenre] = useState({icon: require("./assets/default.png"), name: 'Genre Name'})

  var firstGenre = ""
  var secondGenre = ""

  const onClickHandler = () => {
    // a load of if statements
    setGenre({icon: require("./assets/pop.png"), name:'New Genre Name'})
  }
  
  // -- splash screen thign idk
  // useEffect(() => {SplashScreen.hide()})
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
              marginTop: 20,}}
              onPress={() => setModalOpen (true)}>
            <Text>?</Text>
          </TouchableOpacity>
          <Text style={{fontSize: 35,margin:10,}}>Genre Calculator</Text>
          <Text style={{fontSize: 13, marginTop:10}}>Calculate two genres and receive a hybrid recommendation!</Text>
        </View>
        
        {/* images 
        onClick = needs to store their image value
        example: pop = 1, rock = 2, etc
        */}
        <Text style={styles.headingText}>First Genre</Text>

        <View style={styles.buttonGroup}>
          <View style={styles.buttonRow}>
            <TouchableOpacity>     
              <Image source={require("./assets/pop.png")} style={styles.buttonImage}/>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity>          
              <Image source={require("./assets/hiphop.png")} style={styles.buttonImage}/>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity>          
              <Image source={require("./assets/alt.png")} style={styles.buttonImage}/>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity> 
              <Image source={require("./assets/rock.png")} style={styles.buttonImage}/>
            </TouchableOpacity>
          </View>
          
        </View>
        
        <Text style={styles.headingText}>Second Genre</Text>

        <View style={styles.buttonGroup}>
          <View style={styles.buttonRow}>
            <TouchableOpacity>       
              <Image source={require("./assets/pop.png")} style={styles.buttonImage}/>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity>          
              <Image source={require("./assets/hiphop.png")} style={styles.buttonImage}/>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity>          
              <Image source={require("./assets/alt.png")} style={styles.buttonImage}/>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity> 
              <Image source={require("./assets/rock.png")} style={styles.buttonImage}/>
            </TouchableOpacity>
          </View>
          
        </View>

        {/* // calculate button */}
        {/* onpress: show calculated genre */}
        
        <View style={{flex: 0.1, paddingHorizontal: 80}}>
          <TouchableOpacity onPress={onClickHandler} style={{borderRadius: 10,  backgroundColor: 'blue',}}>
              <Text style={{
                fontSize: 40,
                alignSelf: 'center',
              }}>Calculate!</Text>
            </TouchableOpacity>
        </View>
          
        
        <View style={styles.outputBox}>
          <Image source={genre.icon} style={{alignSelf:'center',width: 100, height: 100, marginTop: 20}}/>
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
          alignSelf: 'center',}}
        >
          <View style={styles.modalContainer}>

          <TouchableOpacity onPress={() => setModalOpen (false)}>
            {/* close button
              should reset all genre values and text values */}
            <Text>O</Text>
          </TouchableOpacity>

            <Text style={styles.modalText}>Welcome to Genre Calculator!</Text>
          </View>
        </Modal>

      </View>
    )
}

export default App;