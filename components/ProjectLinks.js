import React from 'react'
import { StyleSheet, View } from 'react-native'
import { normalizeMarginSize } from '../helpers/normalize'
import { openLink } from '../helpers/OpenLink'
import IconButton from './IconButton'



const ProjectLinks = ({ buttons }) => {

    const renderButtons = (buttons) => {
        return buttons.map(item => {
            return <View key={buttons.link !== undefined ? buttons.link : Math.random()} style={[styles.textIconContainer, { marginHorizontal: normalizeMarginSize(10) }]}>
                <IconButton icon={item.icon} onPress={() => { item.link !== undefined ? openLink(item.link) : item.onPress !== undefined ? item.onPress() : null }}
                    text={item.title} />
            </View>
        })
    }

    return (
        <View style={[styles.linksMainContainer, { margin: normalizeMarginSize(20), marginTop: normalizeMarginSize(5) }]}>
            {renderButtons(buttons)}
        </View>
    )
}


const styles = StyleSheet.create({
    linksMainContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-evenly',
        flexWrap: 'wrap'
    },
    textIconContainer: {
        alignItems: 'center'
    }
})

export default ProjectLinks