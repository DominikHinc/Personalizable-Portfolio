import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, ActivityIndicator } from 'react-native'
import { normalizeHeight, normalizeWidth, normalizeBorderRadiusSize, normalizeMarginSize } from '../helpers/normalize'
import DefaultText from './DefaultText'
import { headerMainStyle, headerSecondaryStyle, sectionHeaderStyle, standardText } from '../constants/FontStyles'
import { TAB_BAR_HEIGHT } from '../constants/TABBAR'
import { ColorsContext } from '../helpers/ColorsContext'
import { useSafeArea } from 'react-native-safe-area-context'



const TextWithGifSection = ({ gifPath, text, title, reverseOrder }) => {
    const { colors } = useContext(ColorsContext)
    const insets = useSafeArea();
    const [imageLoading, setImageLoading] = useState(true)
    
    let GIF_ASPECT_RATIO = 1080 / 2340;

    console.log(Image.getSize(gifPath,(width, height) => GIF_ASPECT_RATIO = width / height))

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
            <View style={[styles.gifSection, {marginTop:verticalView ? GIF_VERTICAL_MARGIN/4 + insets.top/2 : null,paddingHorizontal:verticalView ? "5%": "10%", flex: verticalView ? null : 1/2 }]}>
                <View style={[styles.gifContainer, { height: GIF_SCALED_HEIGHT, width: GIF_SCALED_HEIGHT * GIF_ASPECT_RATIO, borderRadius:GIF_SCALED_HEIGHT/25 }]}>
                    <Image source={gifPath} style={styles.gif} resizeMode='contain' onLoadEnd={()=>{setImageLoading(false)}} />
                    {imageLoading && <View style={styles.loadingIndicatorContainer}><ActivityIndicator size='large' color={colors.font} /></View>}
                </View>
            </View>
            <View style={[styles.textSection,{paddingHorizontal:verticalView ? "5%": null, 
            paddingLeft:reverseOrder?'5%' : null,paddingRight:!reverseOrder?'5%' : null , flex: verticalView ? null : 1/2}]}>
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
        overflow:'hidden',
    },
    gifSection: {
        alignItems: 'center',
        justifyContent:'center',
      
       
    },
    loadingIndicatorContainer:{
        position:'absolute',
        height:'100%',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
     
    },
    textSection: {
        // borderWidth:1,
        
    },
    gif: {
        height: '100%',
        width: '100%',
    },
    textContainer: {

    }
})


export default TextWithGifSection
