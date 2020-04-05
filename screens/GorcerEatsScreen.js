import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../constants/Colors'

const GrocerEatsScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>GrocerEats Screen</Text>
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


export default GrocerEatsScreen
