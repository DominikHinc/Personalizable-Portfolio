import React, { useContext } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import { normalizeHeight } from '../helpers/normalize'
import DefaultText from './DefaultText'
import { sectionHeaderStyle, standardBoldText } from '../constants/FontStyles'
import { ColorsContext } from '../helpers/ColorsContext'

const Footer = () => {
    const {colors} = useContext(ColorsContext)
    return (
        <View style={[styles.footerMainContainer,{backgroundColor:colors.background, height:normalizeHeight(100)}]}>
            <DefaultText style={standardBoldText}>{`@${Platform.OS === 'web' ? "Site" : "App"} created by Dominik Hinc`}</DefaultText>
        </View>
    )
}

const styles = StyleSheet.create({
    footerMainContainer:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'flex-end',
        paddingRight:'5%',
        alignItems:'center'
    }
})


export default Footer
