import React, { useContext } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Colors from '../constants/Colors'
import { ColorsContext } from '../helpers/ColorsContext'

const GrocerEatsScreen = (props) => {
    const {colors} = useContext(ColorsContext)
    return (
        <View style={[styles.screen,{backgroundColor:colors.background}]}>
            <View style={{borderRadius:100, overflow:'hidden'}}>
                <Image source={require('../assets/Gifs/GrocerEats/StandardSearch.gif')} style={{height:200, width:200}} />
            </View>
            
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
