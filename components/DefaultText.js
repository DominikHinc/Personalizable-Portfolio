import React, { useContext } from 'react'
import { StyleSheet, Text, Dimensions, PixelRatio } from 'react-native'
import { normalizeFontSize } from '../helpers/normalize'
import { ColorsContext } from '../helpers/ColorsContext'




const DefaultText = (props) => {
    const { colors } = useContext(ColorsContext)
    const BASE_WIDTH = 1920;
    const SCREEN_WIDTH = Dimensions.get('window').width

    const scale = SCREEN_WIDTH / BASE_WIDTH;

    const normalize = (size) => {
        const newSize = size * scale
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
        // const newSize = size * scale
        // if (Platform.OS === 'android') {
        //     return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
        // } else {
        //     return Math.round(PixelRatio.roundToNearestPixel(newSize))
        // }
    }

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
