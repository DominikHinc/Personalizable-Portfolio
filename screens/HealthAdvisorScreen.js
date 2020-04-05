import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../constants/Colors'

const HealthAdvisorScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>HealthAdvisor Screen</Text>
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


export default HealthAdvisorScreen
