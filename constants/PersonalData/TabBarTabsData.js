import { Entypo, MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import DefaultText from '../../components/DefaultText';
import { normalizeIconSize, normalizeWidth } from '../../helpers/normalize';
import { TAB_BAR_HEIGHT, TAB_WIDTH } from '../TAB_BAR';
import { BOUNCEBACK_TITLE, GROCEREATS_TITLE, HEALTH_ADVISOR_TITLE, WORD_FISHING_TITLE, CONTACT_SCREEN_TITLE, HOME_SCREEN_TITLE } from './ProjectsOverview';
import { TabConfig } from '../../models/tabConfig';



// This file describes the properties of each navigation tab located on top of the screen
// Every case should be named the same as title of a given project in ProjectsOverview.js file or title provided to Home Screen or Contact Screen.

// getTabBarTabsData should return only TabConfig objects
// TabConfig object should contain:
// Text styling object that is supplied to Text component, which is displayed when a given tab is active
// Component displayed as icon of a given tab, it should be a image rectangle whose height is standardImageSize or icon whose size is standardIconSize - it can be dynamically changed.
// Number that describes what should be the width of each tab when it's active
// (optional) Text that is displayed when a given tab is active, if not provided the text will be the same as case label used in switch (project title).

export const getTabBarTabsData = (title, isFocused, colors) => {

    const standardIconSize = normalizeIconSize(48)
    const standardImageSize = normalizeWidth(TAB_BAR_HEIGHT - 15)

    switch (title) {
        case HOME_SCREEN_TITLE:
            return new TabConfig(
                {
                    fontFamily: 'sofia-bold',
                    color: colors.font
                },
                <Entypo name="home" size={standardIconSize} color={isFocused ? colors.font : colors.gray} />,
                normalizeWidth(TAB_WIDTH) / 2
            )

        case CONTACT_SCREEN_TITLE:
            return new TabConfig(
                {
                    fontFamily: 'sofia-bold',
                    color: colors.font
                },
                <MaterialIcons name='contact-mail' size={standardIconSize} color={isFocused ? colors.font : colors.gray} />,
                normalizeWidth(TAB_WIDTH) / 1.5

            )

        case GROCEREATS_TITLE:
            return new TabConfig(
                {
                    fontFamily: 'coiny',
                    color: colors.blue,
                },
                isFocused ? <Image source={require('../../assets/Icons/GrocerEats.png')} style={[styles.iconImage, {
                    width: standardImageSize,
                    height: standardImageSize}]} 
                    />
                    : <Image source={require('../../assets/Icons/GrocerEats_Gray.png')} style={[styles.iconImage, {
                        width: standardImageSize,
                        height: standardImageSize}]} 
                        />,
                normalizeWidth(TAB_WIDTH) / 1.15
            )

        case WORD_FISHING_TITLE:
            return new TabConfig(
                {
                    fontFamily: 'berkshireswash',
                    fontSize: 19,
                    color: colors.font,
                },
                
                <DefaultText style={{
                    fontFamily: 'berkshireswash',
                    fontSize: 48,
                    color: isFocused ? colors.font : colors.gray
                }}>W</DefaultText>,
                normalizeWidth(TAB_WIDTH)/ 0.95,
                "WORDFISHING"
            )

        case BOUNCEBACK_TITLE:
            return new TabConfig(
                {
                    color: colors.darkBlue,
                    fontFamily: 'gibson',
                    fontSize: 25
                },
                isFocused ? <Image source={require('../../assets/Icons/BounceBack.png')} style={[styles.iconImage, {
                    width: standardImageSize,
                    height: standardImageSize}]}
                    />
                    : <Image source={require('../../assets/Icons/BounceBack_Gray.png')} style={[styles.iconImage, {
                        width: standardImageSize,
                        height: standardImageSize}]}
                        />,
                normalizeWidth(TAB_WIDTH) / 1.2
            )

        case HEALTH_ADVISOR_TITLE:
            return new TabConfig(
                {
                    color: colors.lightGreen,
                    fontFamily: 'impact'
                },
                isFocused ? <Image source={require('../../assets/Icons/Health_Advisor.png')} style={[styles.iconImage, {
                    width: standardImageSize,
                    height: standardImageSize}]}
                    />
                    : <Image source={require('../../assets/Icons/Health_Advisor_Gray.png')} style={[styles.iconImage, {
                        width: standardImageSize,
                        height: standardImageSize}]}
                        />,
                normalizeWidth(TAB_WIDTH)
            )
        default:
            return new TabConfig(
                {
                    fontFamily: 'sofia-bold',
                    color: colors.font
                },
                <MaterialCommunityIcons name="checkbox-blank" size={standardIconSize} color={isFocused ? colors.font : colors.gray} />,
                normalizeWidth(TAB_WIDTH)
            )
    }
}

const styles = StyleSheet.create({
    iconImage: {

    },
})