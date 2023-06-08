import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import To_do from './Screen/To_do'
// import store from './Components/store'
// import { Provider } from 'react-redux'


const App = () => {
  return (
    <View>
    {/* <Provider> */}
      <To_do/>
    {/* </Provider> */}
    </View>
  )
}

export default App

const styles=StyleSheet.create({})