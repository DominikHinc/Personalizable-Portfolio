import React, { useContext } from 'react'
import { StyleSheet, Text, Dimensions, PixelRatio } from 'react-native'
import { normalizeFontSize } from '../helpers/normalize'
import { ColorsContext } from '../helpers/ColorsContext'




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
