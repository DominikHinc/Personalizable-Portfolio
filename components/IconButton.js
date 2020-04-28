import React, { useContext } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { standardBoldText } from '../constants/FontStyles'
import { ColorsContext } from '../helpers/ColorsContext'
import { normalizeHeight, normalizeMarginSize, normalizeWidth } from '../helpers/normalize'
import { normalizeStaticIcon } from '../helpers/normalizeStaticIcon'
import DefaultText from './DefaultText'

// This component is used in HomeScreen
// Wraps passed icon inside touchable which open passed link when pressed.

const IconButton = ({ icon, onPress, text }) => {
    const { colors } = useContext(ColorsContext)

    return (
        <View style={[styles.mainContainer, { height: text === undefined ? normalizeHeight(icon.props.size + 30) : null, 
        width: text === undefined ? normalizeWidth(icon.props.size + 30) : normalizeWidth(90)}]}>
            <TouchableOpacity style={styles.iconTouchable} onPress={onPress}>
                <View style={styles.innerContainer}>
                    {normalizeStaticIcon(icon, colors)}
                </View>
                {text !== undefined && <DefaultText style={{ ...standardBoldText, color: colors.linkBlue, marginTop:normalizeMarginSize(5) }}>{text}</DefaultText>}
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    mainContainer: {


    },
    iconTouchable: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    innerContainer: {

    }
})


export default IconButton
