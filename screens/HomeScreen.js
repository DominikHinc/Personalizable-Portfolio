import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Colors from '../constants/Colors'

const HomeScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Image source={require('../assets/Images/WavePattern.png')} style={{width:'100%', height:1000, tintColor:Colors.yellow}} />
            <Text>Home Screen</Text>
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


export default HomeScreen
