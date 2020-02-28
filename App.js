import React, { useState } from "react"
import { StyleSheet, Text, View, Button } from "react-native"

export default function App() {
  const [outputText, setOutputText] = useState("Nomaini manu tekstu.")
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{outputText}</Text>
      <Button title="Tryck mig" onPress={() => setOutputText("Es Tevi ljoti miilu")} />
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
