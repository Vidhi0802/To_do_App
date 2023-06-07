import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TaskList = () => {
  return (
    <View>
      <View style={styles.TaskListContainer}>
        <Text style={styles.TaskList}>TaskList                                                                           🗑️ </Text>
      </View>
    </View>
  )
}

export default TaskList

const styles = StyleSheet.create({
    TaskListContainer: {
        paddingBottom: 16,
        paddingTop: 28,
    },
    TaskList: {
        fontSize: 14,
        fontWeight: 500,
    },
})