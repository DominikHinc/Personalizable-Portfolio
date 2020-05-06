import React, { useContext, useEffect, useState } from 'react';
import { Animated, StyleSheet, TouchableOpacity } from 'react-native';
import DefaultText from '../components/DefaultText';
import { getTabBarTabsData } from '../constants/PersonalData/TabBarTabsData';
import { TAB_BAR_HEIGHT } from '../constants/TAB_BAR';
import { ColorsContext } from '../helpers/ColorsContext';
import { normalizeHeight, normalizeMarginSize } from '../helpers/normalize';
import { HOME_SCREEN_TITLE, CONTACT_SCREEN_TITLE } from '../constants/PersonalData/ProjectsOverview';
import { alwaysDisplayHomeAndContactLabel } from '../constants/PersonalData/AppData';

// This component is used in MyTabBar.js file
// Returns custom animated tab, for every screen
// It utilizes data from TabBarTabsData.js file

const MyTabBarTab = ({ label, isFocused, options, onPress }) => {
    const [animatedValue, setAnimatedValue] = useState(new Animated.Value(isFocused ? 1 : 0))
    const {colors} = useContext(ColorsContext)

    const tabProperties = getTabBarTabsData(label,isFocused,colors);

    useEffect(() => {
        startAnimation();
    }, [isFocused])

    const startAnimation = () => {
        Animated.spring(animatedValue, {
            toValue: alwaysDisplayHomeAndContactLabel ? 
                        label === HOME_SCREEN_TITLE || label === CONTACT_SCREEN_TITLE ?
                                 1 : isFocused ? 1 : 0 
                        : isFocused ? 1 : 0,

            overshootClamping: true,
            bounciness: 12

        }).start();
    }

    const textWidth = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, tabProperties.widthWhenTabIsActive]
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
        <Animated.View style={[styles.mainTabContainer, {marginHorizontal: normalizeMarginSize(10), height:normalizeHeight(TAB_BAR_HEIGHT)}]}>
            <TouchableOpacity
                accessibilityRole="button"
                accessibilityStates={isFocused ? ['selected'] : []}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                style={styles.tabTouchable}
            >
                <Animated.View style={[{opacity:iconOpacity}]}>
                    {tabProperties.icon}
                </Animated.View>

                <Animated.View style={[{ opacity: textOpacity, marginLeft: normalizeMarginSize(10), width: textWidth }]}>
                    <DefaultText numberOfLines={1} style={{ fontSize: 22, ...tabProperties.textProperties, color: isFocused ? tabProperties.textProperties.color : colors.gray }}>
                        {tabProperties.title !== undefined ? tabProperties.title : label}
                    </DefaultText>
                </Animated.View>

            </TouchableOpacity>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    mainTabContainer: {
        
        // backgroundColor: Colors.primary,
        
    },
    tabTouchable: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
})


export default MyTabBarTab
