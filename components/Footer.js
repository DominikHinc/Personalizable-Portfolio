import React, { useContext } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import { normalizeHeight } from '../helpers/normalize'
import DefaultText from './DefaultText'
import { sectionHeaderStyle, standardBoldText } from '../constants/FontStyles'
import { ColorsContext } from '../helpers/ColorsContext'

export const FOOTER_HEIGHT = 100;

const Footer = ({ absolute, leftSide }) => {
    const { colors } = useContext(ColorsContext)
    return (
        <View style={[styles.footerMainContainer, absolute === true ? styles.footerAbsoluteContainer : null,
        {
            backgroundColor: colors.background, height: normalizeHeight(FOOTER_HEIGHT), justifyContent: leftSide === true ? 'flex-start' : 'flex-end',
            paddingRight: leftSide === true ? null : '5%', paddingLeft: leftSide === true ? '5%' : null
        }]}>
            <DefaultText style={standardBoldText}>{`@${Platform.OS === 'web' ? "Site" : "App"} created by Dominik Hinc`}</DefaultText>
        </View>
    )
}

const styles = StyleSheet.create({
    footerMainContainer: {
        width: '100%',
        flexDirection: 'row',


        alignItems: 'center'
    },
    footerAbsoluteContainer: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        zIndex: -1
    }
})


export default Footer
