import React, { useContext } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { ColorsContext } from '../helpers/ColorsContext'
import { normalizeHeight, normalizeWidth } from '../helpers/normalize'
import { normalizeStaticIcon } from '../helpers/normalizeStaticIcon'
import { openLink } from '../helpers/OpenLink'

// This component is used in HomeScreen
// Wraps passed icon inside touchable which open passed link when pressed.

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
