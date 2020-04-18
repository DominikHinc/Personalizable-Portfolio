import { Ionicons } from '@expo/vector-icons'
import React, { useContext, useEffect, useState } from 'react'
import { Animated, Dimensions, Easing, ImageBackground, ScrollView, StyleSheet, View } from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context'
import DefaultText from '../components/DefaultText'
import Footer from '../components/Footer'
import MyProjectsSection from '../components/MyProjectsSection'
import Presentation from '../components/Presentation'
import { headerMainStyle, headerSecondaryStyle } from '../constants/FontStyles'
import { HomeScreenConfig } from '../constants/PersonalData/HomeScreenData'
import { TAB_BAR_HEIGHT } from '../constants/TAB_BAR'
import { ColorsContext } from '../helpers/ColorsContext'
import { normalizeHeight, normalizeIconSize, normalizePaddingSize } from '../helpers/normalize'




const HomeScreen = (props) => {
    console.log(Dimensions.get('window').width)
    const { colors } = useContext(ColorsContext)
    const currentContentOffset = new Animated.Value(0)
    const callToActionAnimatedValue = new Animated.Value(0)

    const [shouldCallToActionAnimationReset, setShouldCallToActionAnimationReset] = useState(false)

    const insets = useSafeArea();

    useEffect(() => {
        startCallToActionAnimation()
    }, [])

    useEffect(() => {
        // Every time dimensions change startCallToActionAnimation must be called
        const dimensionsChangeListener = Dimensions.addEventListener('change', () => { setShouldCallToActionAnimationReset(prev => !prev) })

        return () => {
            Dimensions.removeEventListener('change', dimensionsChangeListener)
        }
    }, [])

    useEffect(() => {
        // Every time colors change startCallToActionAnimation must be called
        startCallToActionAnimation()
    }, [colors])

    useEffect(() => {
        startCallToActionAnimation()
    }, [shouldCallToActionAnimationReset])
    
    const startCallToActionAnimation = () => {
        // This function needs to be called every time component rerenders, because rerendering stops the animation.
        Animated.loop(Animated.spring(callToActionAnimatedValue, {
            toValue: callToActionAnimatedValue._value === 0 ? 1 : 0,
            damping: 20,
            velocity: -10,
        }), { iterations: -1 }).start()
    }
    

    const onScrollHandler = (e) => {
        currentContentOffset.setValue(e.nativeEvent.contentOffset.y);

    }

    const imageOpacity = currentContentOffset.interpolate({
        inputRange: [0, Dimensions.get('window').height - normalizeHeight(TAB_BAR_HEIGHT) > 0 ? Dimensions.get('window').height - normalizeHeight(TAB_BAR_HEIGHT) : Dimensions.get('window').height],
        outputRange: [1, 0],
        extrapolate: 'clamp',
        easing: Easing.ease,
    })
    const imageHeight = currentContentOffset.interpolate({
        inputRange: [0, Dimensions.get('window').height - normalizeHeight(TAB_BAR_HEIGHT) > 0 ? Dimensions.get('window').height - normalizeHeight(TAB_BAR_HEIGHT) : Dimensions.get('window').height],
        outputRange: [Dimensions.get('window').height, 0],
        extrapolate: 'clamp',
        easing: Easing.ease,
    })
    const callToActionIconMargin = currentContentOffset.interpolate({
        inputRange: [0, Dimensions.get('window').height / 5],
        outputRange: [0, -200],
        extrapolate: 'clamp',
        easing: Easing.ease,
    })
    const callToActionIconAnimationState = {
        transform: [{
            translateY: callToActionAnimatedValue.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [0, -20, 0]
            }),

        }, {
            scale: callToActionAnimatedValue.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [1, 0.9, 1]
            }),
        },
        {
            rotate: callToActionAnimatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg']
            }),
        }
        ]
    }

    return (
        <View style={[styles.screen, { backgroundColor: colors.background }]}>
            <Animated.View style={[styles.headerView, { backgroundColor: colors.first, opacity: imageOpacity, height: imageHeight, }]}>
                <ImageBackground style={styles.headerImage} source={HomeScreenConfig.backgroundImage}>
                    <DefaultText style={{ ...headerMainStyle, color: 'white' }}>{HomeScreenConfig.title}</DefaultText>
                    <DefaultText style={{ ...headerSecondaryStyle, color: 'white' }}>{HomeScreenConfig.subTitle}</DefaultText>
                    <Animated.View style={[styles.callToActionIconContainer, callToActionIconAnimationState, {marginBottom: callToActionIconMargin }]}>
                        <Ionicons name="ios-arrow-dropdown" size={normalizeIconSize(50)} />
                    </Animated.View>
                </ImageBackground>
            </Animated.View>
            <ScrollView style={[styles.screenScrollView, { marginTop: normalizeHeight(TAB_BAR_HEIGHT) + insets.top, }]} contentContainerStyle={[styles.scrollViewInnerContainer, { paddingTop: Dimensions.get('window').height, }]}
                onScroll={onScrollHandler} onMomentumScrollEnd={onScrollHandler} onScrollBeginDrag={onScrollHandler} scrollEventThrottle={1}>
                <View style={[styles.screenUseableContainer, { backgroundColor: colors.background }]}>
                    

                    <View style={[styles.projectsSectionContainer, { paddingTop: normalizePaddingSize(20) }]}>
                        <MyProjectsSection navigation={props.navigation} />
                    </View>

                    <View style={styles.aboutMeSectionContainer}>
                        <Presentation />
                    </View>
                    <View>
                        <Footer />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,


    },
    headerView: {

        width: '100%',
        position: "absolute",
    },
    headerImage: {
        width: '100%',
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    screenScrollView: {
        flex: 1,

    },
    scrollViewInnerContainer: {


    },
    screenUseableContainer: {
        flex: 1,

    },
    projectsSectionContainer: {
        flex: 1,


    },
    callToActionIconContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        alignItems: 'center',

    }
})


export default HomeScreen
