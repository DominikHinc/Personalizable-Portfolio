import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../constants/Colors'

const BounceBackScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>BounceBack Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        backgroundColor:Colors.primary
    }
})


export default BounceBackScreen
