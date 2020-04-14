import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Animated } from 'react-native';
import { TAB_WIDTH, TAB_BAR_HEIGHT } from '../constants/TABBAR';
import { normalizeFontSize, normalizeIconSize, normalizeMarginSize, normalizeWidth, normalizeHeight } from '../helpers/normalize';
import Colors from '../constants/Colors'
import DefaultText from '../components/DefaultText';
import { Entypo, MaterialIcons } from '@expo/vector-icons'
import { ColorsContext } from '../helpers/ColorsContext';

const getLabelFontStyle = (label, colors) => {
    switch (label) {
        case "Home":
            return {
                fontFamily: 'sofia-bold',
                color: colors.font
            }

        case "Contact":
            return {
                fontFamily: 'sofia-bold',
                color: colors.font
            }

        case "GrocerEats":
            return {
                fontFamily: 'coiny',
                color: colors.blue
            }

        case "WordFishing":
            return {
                fontFamily: 'berkshireswash',
                fontSize: normalizeFontSize(18),
                color: colors.font
            }

        case "BounceBack":
            return {
                color: colors.darkBlue,
                fontFamily: 'gibson',
                fontSize: normalizeFontSize(24)
            }

        case "Health Advisor":
            return {
                color: colors.lightGreen,
                fontFamily: 'impact'
            }
    }
}

const getPreviewIcon = (label, colors, isFocused) => {
    switch (label) {
        case "Home":
            return <Entypo name="home" size={normalizeIconSize(48)} color={isFocused ? colors.font : colors.gray} />
        case "Contact":
            return <MaterialIcons name='contact-mail' size={normalizeIconSize(48)} color={isFocused ? colors.font : colors.gray} />

        case "GrocerEats":
            return isFocused ? <Image source={require('../assets/Icons/GrocerEats.png')} style={styles.iconImage} />
            : <Image source={require('../assets/Icons/GrocerEats_Gray.png')} style={styles.iconImage} />

        case "WordFishing":
            // return <Animated.Image source={require('../assets/Icons/W.png')} style={styles.iconImage} />
            return <DefaultText style={{
                fontFamily: 'berkshireswash',
                fontSize: normalizeFontSize(48),
                color: isFocused ? colors.font : colors.gray
            }}>W</DefaultText>
        case "BounceBack":
            return isFocused ? <Image source={require('../assets/Icons/BounceBack.png')} style={styles.iconImage} />
            :<Image source={require('../assets/Icons/BounceBack_Gray.png')} style={styles.iconImage} />

        case "Health Advisor":
            return isFocused ? <Image source={require('../assets/Icons/Health_Advisor.png')} style={styles.iconImage} />
            :<Image source={require('../assets/Icons/Health_Advisor_Gray.png')} style={styles.iconImage} />
    }
}

const getTabFullWidth = (label) => {
    switch (label) {
        case "Home":
            return TAB_WIDTH / 2
        case "Contact":
            return TAB_WIDTH / 1.5

        case "GrocerEats":
            return TAB_WIDTH / 1.15

        case "WordFishing":
            return TAB_WIDTH / 1.05
        case "BounceBack":
            return TAB_WIDTH / 1.2

        case "Health Advisor":
            return TAB_WIDTH
    }
}

const MyTabBarTab = ({ label, isFocused, options, onPress, onLongPress }) => {
    const [animatedValue, setAnimatedValue] = useState(new Animated.Value(isFocused ? 1 : 0))
    const {colors} = useContext(ColorsContext)

    useEffect(() => {
        startAnimation();
    }, [isFocused])

    const startAnimation = () => {
        Animated.spring(animatedValue, {
            toValue: isFocused ? 1 : 0,

            overshootClamping: true,
            bounciness: 12

        }).start();
    }

    const textWidth = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, getTabFullWidth(label)]
    })
    const textOpacity = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    })
    const iconOpacity = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0.5, 1]
    })

    return (
        <Animated.View style={[styles.mainTabContainer]}>
            <TouchableOpacity
                accessibilityRole="button"
                accessibilityStates={isFocused ? ['selected'] : []}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                style={styles.tabTouchable}
            >
                <Animated.View style={[{opacity:iconOpacity}]}>
                    {getPreviewIcon(label, colors, isFocused)}
                </Animated.View>

                <Animated.View style={[{ opacity: textOpacity, marginLeft: normalizeMarginSize(10), width: textWidth }]}>
                    <DefaultText numberOfLines={1} style={{ fontSize: normalizeFontSize(22), ...getLabelFontStyle(label, colors), color: getLabelFontStyle(label, colors).color }}>
                        {label !== "WordFishing" ? label : "WORDFISHING"}
                    </DefaultText>
                </Animated.View>

            </TouchableOpacity>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    mainTabContainer: {
        height: TAB_BAR_HEIGHT,
        // backgroundColor: Colors.primary,
        marginHorizontal: normalizeMarginSize(10)
    },
    tabTouchable: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    iconImage: {
        width: TAB_BAR_HEIGHT - normalizeWidth(15),
        height: TAB_BAR_HEIGHT - normalizeHeight(15),

    },
    wordFishingImage: {
        width: TAB_WIDTH,
        height: TAB_WIDTH / 2
    }
})


export default MyTabBarTab
