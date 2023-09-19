import React from "react"
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'

const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.text}>Boiler Room Inventory App</Text>
      </View>
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    backgroundColor: 'lightblue',
    flex: 1,
    alignItems: 'center'
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: "black",
  },
})



export default App