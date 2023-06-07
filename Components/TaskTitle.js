import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

const TaskTitle = () => {
  return (
    <View>
          <View style={styles.TaskTitleContainer}>
              <Text style={styles.TaskTitle}> Task Title </Text>
          </View>
          <View style={styles.containerHeading}>
              <Text style={styles.Heading}> NFT Web App Prototype </Text>
          </View>
          <View style={styles.descriptionContainer}>
              <Text style={styles.description}> Descriptions </Text>
          </View>
          <View style={styles.containerHeading}>
          <Text style={styles.paragraph}>Last year was a fantastic year for NFTs, with 
              the market reaching a $40 billion valuation for the
              first time. In addition, more than $10 billion worth
              of NFTs are now sold every week.</Text>
          </View>
    </View>
  )
}

export default TaskTitle

const styles = StyleSheet.create({
  TaskTitleContainer:{
    paddingBottom: 12,
    paddingTop: 36,
  },
  TaskTitle:{
    fontSize: 14,
    fontWeight: 500,
  },
  containerHeading:{
    paddingTop: 12,
    paddingBottom: 15,
  },
  Heading:{
    fontSize: 20,
    fontWeight: 600,
    color: 'black',
  },
  descriptionContainer:{
    paddingBottom: 12,
    paddingTop: 15,
  },
  description:{
    fontSize: 14,
    fontWeight: 500,
  },
  paragraph:{
    fontSize: 14,
    fontWeight: 500,
    color: 'black',
  }
})