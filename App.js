import React, { useState } from "react"
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from "react-native"

export default function App() {
  // State handler
  const [input, setInput] = useState("")
  const [taskArr, setTaskArr] = useState([])

  // The Logic here
  const taskHandler = enteredText => setInput(enteredText)

  const addTask = () =>
    setTaskArr(currentGoals => [
      ...currentGoals,
      {
        id: Math.random().toString(),
        value: input
      }
    ])

  return (
    <View style={styles.body}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.textInput}
          onChangeText={taskHandler}
          value={input}
        />
        <Button title="ADD" onPress={addTask} />
      </View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={taskArr}
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    padding: 60
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center"
  },
  textInput: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    width: "100%"
  },
  listItem: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#ccc"
  }
})
