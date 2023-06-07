import { StyleSheet, Text, View } from 'react-native'
import React, { createElement } from 'react'

const Title = () => {
  return (
    <View style={styles.title}>
      <Text style={styles.title_text}>Task Details</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
     title:{
      paddingBottom:20,
      justifyContent: 'center',
      alignItems: 'center',
     },
     title_text:{
      fontSize: 16,
      fontWeight: '500',  
      color: 'black',
     },
})