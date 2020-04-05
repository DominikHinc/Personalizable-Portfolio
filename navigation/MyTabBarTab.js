import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { TAB_WIDTH, TAB_BAR_HEIGHT } from '../constants/TABBAR';
import { normalizeFontSize, normalizeIconSize, normalizeMarginSize } from '../helpers/normalize';
import Colors from '../constants/Colors'
import DefaultText from '../components/DefaultText';
import Animated, { Easing } from 'react-native-reanimated'
import { Entypo, MaterialIcons } from '@expo/vector-icons'

const getLabelFontStyle = (label) => {
    switch (label) {
        case "Home":
            return {
                fontFamily: 'sofia-bold',
                color: Colors.secondary
            }

        case "Contact":
            return {
                fontFamily: 'sofia-bold',
                color: Colors.secondary
            }

        case "GrocerEats":
            return {
                fontFamily: 'coiny',
                color: Colors.blue
            }

        case "WordFishing":
            return {
                fontFamily: 'berkshireswash',
                fontSize: normalizeFontSize(18)
            }

        case "BounceBack":
            return {
                color: Colors.darkBlue,
                fontFamily: 'gibson',
                fontSize: normalizeFontSize(24)
            }

        case "Health Advisor":
            return {
                color: Colors.lightGreen,
                fontFamily: 'impact'
            }
    }
}

const getPreviewIcon = (label) => {
    switch (label) {
        case "Home":
            return <Entypo name="home" size={normalizeIconSize(30)} />
        case "Contact":
            return <MaterialIcons name='contact-mail' size={normalizeIconSize(30)} />

        case "GrocerEats":
            return <Image source={require('../assets/Icons/GrocerEats.png')} style={styles.iconImage} />

        case "WordFishing":
            return <Image source={require('../assets/Icons/W.png')} style={styles.iconImage} />

        case "BounceBack":
            return <Image source={require('../assets/Icons/BounceBack.png')} style={styles.iconImage} />

        case "Health Advisor":
            return <Image source={require('../assets/Icons/Health_Advisor.png')} style={styles.iconImage} />
    }
}

const MyTabBarTab = ({ label, isFocused, options, onPress, onLongPress }) => {
    const {
        set,
        cond,
        startClock,
        stopClock,
        clockRunning,
        block,
        timing,
        call,
        Value,
        Clock,
        interpolate
    } = Animated;
    const [reanimatedValue, setReanimatedValue] = useState(new Value(isFocused ? 1 : 0))
    const [previousFoucusState, setPreviousFoucusState] = useState(isFocused)

    useEffect(() => {
        if (isFocused !== previousFoucusState) {
            setPreviousFoucusState(isFocused)
            if (isFocused) {
                setReanimatedValue(runTiming(new Clock(), new Value(0), new Value(1)))
            } else {
                setReanimatedValue(runTiming(new Clock(), new Value(1), new Value(0)))
            }
        }

    }, [isFocused])

    const runTiming = (clock, value, dest) => {
        const state = {
            finished: new Value(0),
            position: value,
            time: new Value(0),
            frameTime: new Value(0),
        };

        const config = {
            duration: 300,
            toValue: dest,
            easing: Easing.inOut(Easing.cubic),
        };

        return block([

            cond(clockRunning(clock), 0, [
                set(state.finished, 0),
                set(state.time, 0),
                set(state.position, value),
                set(state.frameTime, 0),
                set(config.toValue, dest),
                startClock(clock),
            ]),
            timing(clock, state, config),
            cond(state.finished, stopClock(clock)),
            state.position,
        ]);
    }

    const textWidth = interpolate(reanimatedValue, {
        inputRange: [0, 1],
        outputRange: [0, TAB_WIDTH]
    })
    const textOpacity = interpolate(reanimatedValue, {
        inputRange: [0, 1],
        outputRange: [0, 1]
    })
    const textScaleX = interpolate(reanimatedValue, {
        inputRange: [0, 1],
        outputRange: [0, 1]
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
                {getPreviewIcon(label)}
                <Animated.View style={[{ opacity: textOpacity, marginLeft: normalizeMarginSize(10), width: textWidth, transform: [{ scaleX: textScaleX }] }]}>
                    <DefaultText numberOfLines={1} style={{ fontSize: normalizeFontSize(22), ...getLabelFontStyle(label), color: isFocused ? getLabelFontStyle(label).color : Colors.secondary }}>
                        {label !== "WordFishing" ? label
                            :
                            <DefaultText>
                                <DefaultText style={{
                                    color: isFocused ? "white" : Colors.secondary,
                                    textShadowRadius: isFocused ? 2 : 0,
                                    textShadowColor: Colors.secondary
                                }} >
                                    WORD

                            </DefaultText>
                                <DefaultText style={{
                                    color: isFocused ? "black" : Colors.secondary,
                                    textShadowRadius: isFocused ? 2 : 0,
                                    textShadowColor: "white"
                                }}
                                >
                                    FISHING
                        </DefaultText>
                            </DefaultText>
                        }
                    </DefaultText>
                </Animated.View>

            </TouchableOpacity>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    mainTabContainer: {
        height: TAB_BAR_HEIGHT,
        backgroundColor: Colors.primary,
        marginHorizontal:normalizeMarginSize(10)
    },
    tabTouchable: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    iconImage: {
        width: TAB_BAR_HEIGHT / 2,
        height: TAB_BAR_HEIGHT / 2,

    }
})


export default MyTabBarTab
