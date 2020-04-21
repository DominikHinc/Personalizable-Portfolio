import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { normalizeBorderRadiusSize, normalizePaddingSize } from '../helpers/normalize'
import { normalizeStaticIcon } from '../helpers/normalizeStaticIcon'
import { ColorsContext } from '../helpers/ColorsContext'
import { openLink } from '../helpers/OpenLink'

const BottomLinkButton = ({ buttonConfig }) => {

    const {colors} = useContext(ColorsContext)
    
    return (
        <View style={[styles.linkIconContainer, {
            backgroundColor: colors.second, right: normalizePaddingSize(50),
            borderTopLeftRadius: normalizeBorderRadiusSize(15), borderTopRightRadius: normalizeBorderRadiusSize(15)
        }]}>
            <TouchableOpacity onPress={() => { openLink(buttonConfig.link) }}
                style={[styles.linkIconTouchable, { padding: normalizePaddingSize(10), paddingBottom: normalizePaddingSize(20) }]} >
                {normalizeStaticIcon(buttonConfig.icon, colors)}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    linkIconContainer: {
        position: 'absolute',
        bottom: 0,
        overflow: 'hidden',
        zIndex: 3,
    },
    linkIconTouchable: {
        flex: 1,

    }
})


export default BottomLinkButton
