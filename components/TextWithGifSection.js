import React, { useContext } from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import { normalizeHeight, normalizeWidth, normalizeBorderRadiusSize, normalizeMarginSize } from '../helpers/normalize'
import DefaultText from './DefaultText'
import { headerMainStyle, headerSecondaryStyle, sectionHeaderStyle, standardText } from '../constants/FontStyles'
import { TAB_BAR_HEIGHT } from '../constants/TABBAR'
import { ColorsContext } from '../helpers/ColorsContext'

const GIF_SCALE = 1 / 4;
const GIF_HEIGHT = normalizeHeight(2340 * GIF_SCALE);
const GIF_WIDTH = normalizeWidth(1080 * GIF_SCALE);
const GIF_ASPECT_RATIO = GIF_WIDTH / GIF_HEIGHT;


const TextWithGifSection = ({ gifPath, text, title, reverseOrder }) => {
    const { colors } = useContext(ColorsContext)
    //Whether the aspect ratio of the window is vertical or horizontal
    const verticalView = Dimensions.get('window').height / Dimensions.get('window').width > 1;

    const GIF_VERTICAL_MARGIN = Dimensions.get('window').height * 0.2
    const GIF_SCALED_HEIGHT = verticalView ? 
    (Dimensions.get('window').height-TAB_BAR_HEIGHT) - TAB_BAR_HEIGHT - GIF_VERTICAL_MARGIN/2 :
     Dimensions.get('window').height - TAB_BAR_HEIGHT - GIF_VERTICAL_MARGIN;
    return (
        <View style={[styles.sectionMainContainer,{minHeight: Dimensions.get('window').height - TAB_BAR_HEIGHT,  backgroundColor: colors.first,
            flexDirection: verticalView? 'column' : reverseOrder === true ? 'row-reverse' : 'row', 
            justifyContent:verticalView ? null : 'space-evenly'
        }]}>
            <View style={[styles.gifSection, {marginTop:verticalView ? GIF_VERTICAL_MARGIN/4 : null}]}>
                <View style={[styles.gifContainer, { height: GIF_SCALED_HEIGHT, width: GIF_SCALED_HEIGHT * GIF_ASPECT_RATIO, borderRadius:GIF_SCALED_HEIGHT/25 }]}>
                    <Image source={gifPath} style={styles.gif} resizeMode='contain' />
                </View>
            </View>
            <View style={[styles.textSection,{paddingHorizontal:verticalView ? "5%": "10%"}]}>
                <View style={styles.textContainer}>
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
        flex:1
    },
    gifContainer: {
        overflow:'hidden'
    },
    gifSection: {
         alignItems: 'center',
        justifyContent:'center'
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
