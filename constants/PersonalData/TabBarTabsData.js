import { Entypo, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import DefaultText from '../../components/DefaultText';
import { normalizeIconSize, normalizeWidth } from '../../helpers/normalize';
import { TAB_BAR_HEIGHT, TAB_WIDTH } from '../TAB_BAR';
import { BOUNCEBACK_TITLE, GROCEREATS_TITLE, HEALTH_ADVISOR_TITLE, WORD_FISHING_TITLE, CONTACT_SCREEN_TITLE, HOME_SCREEN_TITLE } from './ProjectsOverview';



// This file describes properties related to navigation tabs located on top of the screen
// Every case should be named the same as title of a given project in ProjectsOverview.js file or title provided to Home Screen and Contact Screen in PortfolioNavigator.js

// textProperties are supplied to Text component that is displayed when a given tab is active
// icon is component displayed as icon of a given tab, it should be a image rectangle whose height is normalizeHeight(TAB_BAR_HEIGHT - 15) or icon whose height is normalizeIconSize(48)
// icon can changed depending whether the tab is focused or not
// widthWhenTabIsActive describes what should be the width of each tab when it's active


export const getTabBarTabsData = (label, isFocused, colors) => {

    const standardIconSize = normalizeIconSize(48)
    const standardImageSize = normalizeWidth(TAB_BAR_HEIGHT - 15)

    switch (label) {
        case HOME_SCREEN_TITLE:
            return {
                textProperties: {
                    fontFamily: 'sofia-bold',
                    color: colors.font
                },
                icon: <Entypo name="home" size={standardIconSize} color={isFocused ? colors.font : colors.gray} />,
                widthWhenTabIsActive: normalizeWidth(TAB_WIDTH) / 2
            }

        case CONTACT_SCREEN_TITLE:
            return {
                textProperties: {
                    fontFamily: 'sofia-bold',
                    color: colors.font
                },
                icon: <MaterialIcons name='contact-mail' size={standardIconSize} color={isFocused ? colors.font : colors.gray} />,
                widthWhenTabIsActive:normalizeWidth(TAB_WIDTH) / 1.5

            }

        case GROCEREATS_TITLE:
            return {
                textProperties: {
                    fontFamily: 'coiny',
                    color: colors.blue,
                },
                icon: isFocused ? <Image source={require('../../assets/Icons/GrocerEats.png')} style={[styles.iconImage, {
                    width: standardImageSize,
                    height: standardImageSize}]} 
                    />
                    : <Image source={require('../../assets/Icons/GrocerEats_Gray.png')} style={[styles.iconImage, {
                        width: standardImageSize,
                        height: standardImageSize}]} 
                        />,
                widthWhenTabIsActive: normalizeWidth(TAB_WIDTH) / 1.15
            }

        case WORD_FISHING_TITLE:
            return {
                textProperties: {
                    fontFamily: 'berkshireswash',
                    fontSize: 19,
                    color: colors.font,
                },
                title: "WORDFISHING",
                icon: <DefaultText style={{
                    fontFamily: 'berkshireswash',
                    fontSize: 48,
                    color: isFocused ? colors.font : colors.gray
                }}>W</DefaultText>,
                widthWhenTabIsActive: normalizeWidth(TAB_WIDTH)/ 0.95
            }

        case BOUNCEBACK_TITLE:
            return {
                textProperties: {
                    color: colors.darkBlue,
                    fontFamily: 'gibson',
                    fontSize: 25
                },
                icon: isFocused ? <Image source={require('../../assets/Icons/BounceBack.png')} style={[styles.iconImage, {
                    width: standardImageSize,
                    height: standardImageSize}]}
                    />
                    : <Image source={require('../../assets/Icons/BounceBack_Gray.png')} style={[styles.iconImage, {
                        width: standardImageSize,
                        height: standardImageSize}]}
                        />,
                widthWhenTabIsActive: normalizeWidth(TAB_WIDTH) / 1.2
            }

        case HEALTH_ADVISOR_TITLE:
            return {
                textProperties: {
                    color: colors.lightGreen,
                    fontFamily: 'impact'
                },
                icon: isFocused ? <Image source={require('../../assets/Icons/Health_Advisor.png')} style={[styles.iconImage, {
                    width: standardImageSize,
                    height: standardImageSize}]}
                    />
                    : <Image source={require('../../assets/Icons/Health_Advisor_Gray.png')} style={[styles.iconImage, {
                        width: standardImageSize,
                        height: standardImageSize}]}
                        />,
                widthWhenTabIsActive: normalizeWidth(TAB_WIDTH)
            }
    }
}

const styles = StyleSheet.create({
    iconImage: {

    },
})