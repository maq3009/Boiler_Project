import React from "react"
import { View, Text, Image, SafeAreaView, StyleSheet } from 'react-native'

const App = () => {
  let x = 1;
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.text}>Boiler Room Inventory App</Text>
        <View style={styles.boilerContainer}>
          <Image 
            source={require('./assets/Boiler.png')}
            style={{ height: 95, width: 300 }}
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
  }
})



export default App