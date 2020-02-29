import React, { useState } from "react"
import { StyleSheet, View, FlatList, Button } from "react-native"

import TaskItem from "./components/TaskItem"
import TaskInput from "./components/TaskInput"

export default function App() {
  const [taskArr, setTaskArr] = useState([])
  const [overlay, setOverlay] = useState(false)

  const addTask = taskTitle => {
    setTaskArr(currentTasks => [
      ...currentTasks,
      {
        id: Math.random().toString(),
        value: taskTitle
      }
    ])
    setOverlay(false)
  }

  const removeTask = taskId => {
    setTaskArr(currentTasks => {
      return currentTasks.filter(task => task.id !== taskId)
    })
  }

  const cancelAddTask = () => {
    setOverlay(false)
  }

  return (
    <View style={styles.body}>
      <Button title="Add new task" onPress={() => setOverlay(true)} />
      <TaskInput
        visible={overlay}
        onAddTask={addTask}
        onCancel={cancelAddTask}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={taskArr}
        renderItem={itemData => (
          <TaskItem
            id={itemData.item.id}
            value={itemData.item.value}
            onDelete={removeTask}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    padding: 60
  }
})
