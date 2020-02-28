import React from "react"
import { StyleSheet, Text, View } from "react-native"

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Open up App.js to start working on your app!
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EA281E",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff"
  },
  paragraph: { color: "#fff" }
})
