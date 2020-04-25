import React, { useContext } from 'react'
import { StyleSheet, Text } from 'react-native'
import { ColorsContext } from '../helpers/ColorsContext'
import { normalizeFontSize } from '../helpers/normalize'

// Wrapper around standard React Native Text component, it automatically normalizes the font size and applies the font color from the current color context

const DefaultText = (props) => {
    const { colors } = useContext(ColorsContext)

    return (
        <Text {...props}
            style={{
                ...styles.text, ...props.style, fontSize: props.style === undefined ? normalizeFontSize(styles.text.fontSize)
                    :
                    props.style.fontSize === undefined ? normalizeFontSize(styles.text.fontSize) : normalizeFontSize(props.style.fontSize),
                color: props.style === undefined ? colors.font : props.style.color === undefined ? colors.font : props.style.color
            }} >
            {props.children}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 17,
        fontFamily: 'sofia'
    }
})

export default DefaultText
