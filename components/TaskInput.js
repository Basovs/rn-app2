import React, { useState } from "react"
import { View, TextInput, Button, StyleSheet, Modal } from "react-native"

const TaskInput = props => {
  const [input, setInput] = useState("")

  const taskHandler = enteredText => setInput(enteredText)

  const addTaskHandler = () => {
    props.onAddTask(input)
    setInput("")
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.textInput}
          onChangeText={taskHandler}
          value={input}
        />
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.btn}>
            <Button title="ADD" onPress={addTaskHandler} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    width: 300,
    marginBottom: 30
  },
  btnContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    width: "60%"
  },
  btn: {
    width: "35%"
  }
})

export default TaskInput
