import { KeyboardAvoidingView, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import Title from '../Components/title'
import TaskTitle from '../Components/TaskTitle'
import Avatar from '../Components/Avatar'
import TaskList from '../Components/TaskList'
import Tasks from '../Components/Tasks'
import { Platform } from 'react-native'
import { TextInput } from 'react-native'

const To_do = () => {
  const [task, setTask]=useState();
  
  const handleAddTask = () => {
    console.log(task);
  }
  
  return (
    
    <View style={styles.container}>
      <Title/>
      <TaskTitle/>
      <Avatar/>
      <TaskList/>
      <Tasks text={'Task 1'}/>
      <Tasks text={'Task 2'} />
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.writeTaskWrapper}>
      <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)}/>
      <TouchableOpacity onPress={() => handleAddTask}>
        <View style={styles.addTask}>
          <Text style={styles.Plus}>+</Text>
        </View>
      </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
    
  )
}


export default To_do

const styles= StyleSheet.create({
  container: {
    paddingTop: 64,
    paddingHorizontal: 17,
    paddingBottom: 150,
  },
  writeTaskWrapper:{
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
    },
  input:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: 'rgb(235, 240, 240)',
    borderRadius: 16,
    width: 350, 
    marginLeft: 35,   
  },
  addTask:{
    width: 60,
    height: 60,
    backgroundColor: 'rgb(235, 240, 240)',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',

  },
  Plus:{},
})