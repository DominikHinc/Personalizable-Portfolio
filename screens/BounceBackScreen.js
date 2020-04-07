import React, {useContext} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ColorsContext } from '../helpers/ColorsContext'


const BounceBackScreen = (props) => {
    const {colors} = useContext(ColorsContext)
    return (
        <View style={[styles.screen, {backgroundColor:colors.background}]}>
            <Text>BounceBack Screen</Text>
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


export default BounceBackScreen
