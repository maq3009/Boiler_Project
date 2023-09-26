import React from "react"
import { View, Text, Image, SafeAreaView, StyleSheet } from 'react-native'
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";


const App = () => {
  const { landscape } = useDeviceOrientation();
  const containerStyle = landscape ? styles.containerLandscape : styles.containerPortrait;
  const imageStyle = landscape ? styles.imageLandscape : styles.imagePortrait;

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={containerStyle}>
        <Text style={styles.text}>Boiler Room Inventory App</Text>
        <View style={styles.boilerContainer}>
          <Image 
            source={require('./assets/Boiler.png')}
            style={ imageStyle }
          />
        </View>
      </View>
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 5,
  },
  containerPortrait: {
    backgroundColor: "lightblue",
    flex: 1,
    alignItems: "center",
  },
  containerLandscape: {
    backgroundColor: 'lightyellow',
    flex: 1,
    alignItems: "center",
  },
  container: {
    backgroundColor: 'lightblue',
    flex: 1,
    alignItems: 'center'
    
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: "black",
    paddingTop: 20,
  },
  boilerContainer: {
    paddingTop: 50,
  },
  imagePortrait: {
    height: 95,
    width: 300,
    justifyContent: "center",
  },
  imageLandscape: {
    height: 200,
    width: 500,
    justifyContent: "center",
  },
  boilerContainer: {
    paddingTop: 50,
  }
});



export default App