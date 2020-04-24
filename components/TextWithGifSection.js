import React, { useContext, useEffect, useState } from 'react'
import { ActivityIndicator, Dimensions, Image, Platform, StyleSheet, View } from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context'
import { headerMainStyle, standardText } from '../constants/FontStyles'
import { TAB_BAR_HEIGHT } from '../constants/TAB_BAR'
import { ColorsContext } from '../helpers/ColorsContext'
import { normalizeHeight, normalizeMarginSize } from '../helpers/normalize'
import DefaultText from './DefaultText'



const TextWithGifSection = ({ gifPath, text, title, reverseOrder }) => {
    const { colors } = useContext(ColorsContext)
    const insets = useSafeArea();
    const [imageLoading, setImageLoading] = useState(true)

    const [gifAspectRatio, setGifAspectRatio] = useState(1)

    const barHeight = normalizeHeight(TAB_BAR_HEIGHT)
    useEffect(() => {
        if (Platform.OS === 'web' || gifPath.uri !== undefined ) {
            Image.getSize(gifPath.uri !== undefined ? gifPath.uri : gifPath, (width, height) => {
                console.log("Width " + width)
                console.log("Height " + height)
                setGifAspectRatio(width / height)
            })
        } else {
            const { width, height } = Image.resolveAssetSource(gifPath)
            setGifAspectRatio(width / height)
        }
    }, [gifPath])

    //Whether the aspect ratio of the window is vertical or horizontal
    const verticalView = Dimensions.get('window').height / Dimensions.get('window').width > 1;

    const GIF_VERTICAL_MARGIN = Dimensions.get('window').height * 0.2
    const GIF_SCALED_HEIGHT = verticalView ?
        (Dimensions.get('window').height - TAB_BAR_HEIGHT) - barHeight - GIF_VERTICAL_MARGIN / 2 :
        Dimensions.get('window').height - barHeight - GIF_VERTICAL_MARGIN
    return (
        <View style={[styles.sectionMainContainer, {
            minHeight: Dimensions.get('window').height - barHeight, backgroundColor: colors.first,
            flexDirection: verticalView ? 'column' : reverseOrder === true ? 'row-reverse' : 'row',
            justifyContent: verticalView ? null : 'space-evenly'
        }]}>
            <View style={[styles.gifSection, { marginTop: verticalView ? GIF_VERTICAL_MARGIN / 4 + insets.top / 2 : null, paddingHorizontal: verticalView ? "5%" : "10%", flex: verticalView ? null : 1 / 2 }]}>
                <View style={[styles.gifContainer, { height: GIF_SCALED_HEIGHT, width: GIF_SCALED_HEIGHT * gifAspectRatio, borderRadius: GIF_SCALED_HEIGHT / 25 }]}>
                    <Image source={gifPath} style={styles.gif} resizeMode='contain' onLoadEnd={() => { setImageLoading(false) }} />
                    {imageLoading && <View style={styles.loadingIndicatorContainer}><ActivityIndicator size='large' color={colors.font} /></View>}
                </View>
            </View>
            <View style={[styles.textSection, {
                paddingHorizontal: verticalView ? "5%" : null,
                paddingLeft: reverseOrder ? '5%' : null, paddingRight: !reverseOrder ? '5%' : null, flex: verticalView ? null : 1 / 2
            }]}>
                <View style={[styles.textContainer, {marginVertical:verticalView ? normalizeMarginSize(25) : null}]}>
                    <DefaultText style={headerMainStyle}>{title}</DefaultText>
                    <DefaultText style={standardText}>{text}</DefaultText>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    sectionMainContainer: {
        alignItems: 'center',
        flex: 1
    },
    gifContainer: {
        overflow: 'hidden',
    },
    gifSection: {
        alignItems: 'center',
        justifyContent: 'center',


    },
    loadingIndicatorContainer: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    textSection: {

    },
    gif: {
        height: '100%',
        width: '100%',
    },
    textContainer: {

    }
})


export default TextWithGifSection
