import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import DefaultText from './DefaultText'
import { ColorsContext } from '../helpers/ColorsContext'
import { normalizeStaticIcon } from '../helpers/normalizeStaticIcon'
import { normalizePaddingSize, normalizeBorderRadiusSize, normalizeHeight, normalizeWidth, normalizeMarginSize } from '../helpers/normalize'
import {openLink} from '../helpers/OpenLink'

const IconButton = ({ icon, link }) => {
    const { colors } = useContext(ColorsContext)

    return (
        <View style={[styles.mainContainer, {height:normalizeHeight(icon.props.size + 30 ), width:normalizeWidth(icon.props.size + 30) }]}>
            <TouchableOpacity style={styles.iconTouchable} onPress={()=>{openLink(link)}}>
                <View style={styles.innerContainer}>
                    {normalizeStaticIcon(icon, colors)}
                </View>
            </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    mainContainer: {
       
      
    },
    iconTouchable: { 
        flex:1,
        alignItems:'center',
        justifyContent:'center'

    },
    innerContainer:{

    }
})


export default IconButton
