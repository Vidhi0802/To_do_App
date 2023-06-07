import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Title from '../Components/title'
import TaskTitle from '../Components/TaskTitle'
import Avatar from '../Components/Avatar'
import TaskList from '../Components/TaskList'
import Tasks from '../Components/Tasks'

const To_do = () => {
  return (
    <View style={styles.container}>
      <Title/>
      <TaskTitle/>
      <Avatar/>
      <TaskList/>
      <Tasks text={'Task 1'}/>
      <Tasks text={'Task 2'} />
    </View>
  )
}

export default To_do

const styles= StyleSheet.create({
  container: {
    paddingTop: 64,
    paddingHorizontal: 17,
    paddingBottom: 40,
  }
})