import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CheckBox } from '@rneui/base'
import { TouchableOpacity } from 'react-native'


const Tasks = (props) => {
  return (
    <View style={styles.items}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circle}></View>
    </View>
  )
}

export default Tasks

const styles = StyleSheet.create({
    items:{
        backgroundColor: 'rgb(235, 240, 240)',
        padding: 24,
        borderRadius: 16,   
        flexDirection: 'row',   
        alignItems: 'center',
        justifyContent: 'space-between',  
        marginBottom: 12,
    },
    itemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square:{
        height: 24,
        width: 24,
        backgroundColor: 'rgb(173,216,230)',
        borderColor: 'black',
        borderRadius: 70,
        marginRight: 22.4,
    },
    itemText:{
        maxWidth: '80%',
    },
    circle:{
        width: 12,
        height: 12,
        borderColor: 'rgb(173,216,230)',
        borderWidth: 2,
        borderRadius: 5,
    },
})