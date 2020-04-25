import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { standardBoldText } from '../constants/FontStyles'
import { footerText } from '../constants/PersonalData/AppData'
import { ColorsContext } from '../helpers/ColorsContext'
import { normalizeHeight } from '../helpers/normalize'
import DefaultText from './DefaultText'

export const FOOTER_HEIGHT = 100;

// This component is placed at the bottom of every screen
// If absolute is set to true the footer will be placed absolutely at the bottom of the View it is in.
// If leftSide is set to true the text will be aligned to the left side instead of default right side.
// Text displayed inside footer can be changed in AppData.js file

const Footer = ({ absolute, leftSide }) => {
    const { colors } = useContext(ColorsContext)
    return (
        <View style={[styles.footerMainContainer, absolute === true ? styles.footerAbsoluteContainer : null,
        {
            backgroundColor: colors.background, height: normalizeHeight(FOOTER_HEIGHT), justifyContent: leftSide === true ? 'flex-start' : 'flex-end',
            paddingRight: leftSide === true ? null : '5%', paddingLeft: leftSide === true ? '5%' : null
        }]}>
            <DefaultText style={standardBoldText}>{footerText}</DefaultText>
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
