import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-elements'

const Avatar_Comp = () => {
  return (
    <View  style={styles.Avatar}>
        <Avatar
            rounded
              containerStyle={{ height: 24, width: 24, marginHorizontal: -3}}
            source={{
            uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80'
            }}
        />
        <Avatar
            rounded
              containerStyle={{ height: 24, width: 24, marginHorizontal: -3 }}
            source={{
                uri: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
            }}
        />
        <Avatar
            rounded
              containerStyle={{ height: 24, width: 24, marginHorizontal: -3 }}
            source={{
                uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
            }}
        />
        <Avatar
            rounded
              containerStyle={{ height: 24, width: 24, marginHorizontal: -3 }}
            source={{
                uri: 'https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
            }}
        />
    </View>
  )
}

export default Avatar_Comp

const styles = StyleSheet.create({
    Avatar:{
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
        borderColor: 'solid white',
    }
})