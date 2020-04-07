import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../constants/Colors'
import { ColorsContext } from '../helpers/ColorsContext'

const GrocerEatsScreen = (props) => {
    const {colors} = useContext(ColorsContext)
    return (
        <View style={[styles.screen,{backgroundColor:colors.background}]}>
            <Text>GrocerEats Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        
    }
})


export default GrocerEatsScreen
