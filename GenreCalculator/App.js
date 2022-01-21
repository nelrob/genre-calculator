import React, { useState, useEffect} from 'react';
//import SplashScreen from 'react-native-splash-screen';
import {TouchableOpacity, View, Text, StyleSheet, Image, Modal, Button} from 'react-native';
import {styles} from './styles/styles'

// need to have a function where the image opacity goes 40% when button is pressed to signify that data is stored 
// const isPressed = false;

// const imageButton = () => ({

// })

function App() {
  const [modalOpen, setModalOpen] = useState(true)
 // const [text, setText] = useState("+");
  // place in onSecondImageClick
  // const onPressHandler = event => setText("Calculate");
  
  // splash screen thign idk
  //useEffect(() => {SplashScreen.hide()})
  // need function to store image value for image onClick
    return(
      <View style={styles.container}>
        <View style={styles.topContainer} elevation={5}>
          <TouchableOpacity 
            style={{    
              borderWidth:1,
              alignItems:'center',
              justifyContent:'center',
              width:40,
              height:40,
              backgroundColor:'#fff',
              borderRadius:50,
              marginTop: 20,}}
              onPress={() => setModalOpen (true)}>
            <Text>?</Text>
          </TouchableOpacity>
          <Text style={{fontSize: 40,margin:10,}}>Genre Calculator</Text>
          <Text style={{fontSize: 13, marginTop:20}}>Calculate two genres and receive a hybrid recommendation!</Text>
        </View>
        
        {/* images 
        onClick = needs to store their image value
        example: pop = 1, rock = 2, etc
        */}
        <Text style={styles.headingText}>First Genre</Text>

        <View style={styles.buttonGroup}>
          <View style={styles.buttonRow}>
            <TouchableOpacity>     
            <Text style ={styles.buttonText}> Pop</Text>     
              <Image source={require("./assets/pop.png")} style={styles.buttonImage}/>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity>          
              <Image source={require("./assets/hiphop.png")} style={styles.buttonImage}/>
              <Text style ={styles.buttonText}> Pop</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity>          
              <Image source={require("./assets/alt.png")} style={styles.buttonImage}/>
              <Text style ={styles.buttonText}> Pop</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity> 
              <Text style ={styles.buttonText}> Pop</Text>         
              <Image source={require("./assets/rock.png")} style={styles.buttonImage}/>
            </TouchableOpacity>
          </View>
          
        </View>
        
        <Text style={styles.headingText}>Second Genre</Text>

        <View style={styles.buttonGroup}>
          <View style={styles.buttonRow}>
            <TouchableOpacity>     
            <Text style ={styles.buttonText}> Pop</Text>     
              <Image source={require("./assets/pop.png")} style={styles.buttonImage}/>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity>          
              <Image source={require("./assets/hiphop.png")} style={styles.buttonImage}/>
              <Text style ={styles.buttonText}> Pop</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity>          
              <Image source={require("./assets/alt.png")} style={styles.buttonImage}/>
              <Text style ={styles.buttonText}> Pop</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity> 
              <Text style ={styles.buttonText}> Pop</Text>         
              <Image source={require("./assets/rock.png")} style={styles.buttonImage}/>
            </TouchableOpacity>
          </View>
          
        </View>

        {/* // calculate button */}
        {/* onpress: show calculated genre */}
        <View>
          <TouchableOpacity>
            <Text style={{
              paddingBottom: 80,
              fontSize: 50,
              borderStyle: "dashed",
              alignSelf: "center",
            }}>Calculate!</Text>
          </TouchableOpacity>

        </View>

              {/*POPUP MODAL FOR FIRST TIME */}
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