import { Entypo, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import DefaultText from '../../components/DefaultText';
import { TAB_WIDTH, TAB_BAR_HEIGHT } from '../TABBAR';
import { normalizeFontSize, normalizeIconSize, normalizeWidth, normalizeHeight } from '../../helpers/normalize';



// This file describes properties related to navigation tabs located on top of the screen
// Every case should be named the same as title given in ProjectsOverview.js file

// textProperties are supplied to Text component that is displayed when given tab is active
// icon is component displayed as icon of a given tab, it should be a rectangle which height is TAB_BAR_HEIGHT - normalizeHeight(15),
// icon can change depending whether the tab is focused or not
// widthWhenTabIsActive is a property that describes what should be the width of each tab when it's active


export const getTabBarTabsData = (label, isFocused, colors) => {
    switch (label) {
        case "Home":
            return {
                textProperties: {
                    fontFamily: 'sofia-bold',
                    color: colors.font
                },
                icon: <Entypo name="home" size={normalizeIconSize(48)} color={isFocused ? colors.font : colors.gray} />,
                widthWhenTabIsActive: normalizeWidth(TAB_WIDTH) / 2
            }

        case "Contact":
            return {
                textProperties: {
                    fontFamily: 'sofia-bold',
                    color: colors.font
                },
                icon: <MaterialIcons name='contact-mail' size={normalizeIconSize(48)} color={isFocused ? colors.font : colors.gray} />,
                widthWhenTabIsActive:normalizeWidth(TAB_WIDTH) / 1.5

            }

        case "GrocerEats":
            return {
                textProperties: {
                    fontFamily: 'coiny',
                    color: colors.blue
                },
                icon: isFocused ? <Image source={require('../../assets/Icons/GrocerEats.png')} style={[styles.iconImage, {
                    width: normalizeWidth(TAB_BAR_HEIGHT - 15),
                    height: normalizeHeight(TAB_BAR_HEIGHT - 15),}]} 
                    />
                    : <Image source={require('../../assets/Icons/GrocerEats_Gray.png')} style={[styles.iconImage, {
                        width: normalizeWidth(TAB_BAR_HEIGHT - 15),
                        height: normalizeHeight(TAB_BAR_HEIGHT - 15),}]} 
                        />,
                widthWhenTabIsActive: normalizeWidth(TAB_WIDTH) / 1.15
            }

        case "WordFishing":
            return {
                textProperties: {
                    fontFamily: 'berkshireswash',
                    fontSize: 18,
                    color: colors.font,
                },
                title: "WORDFISHING",
                icon: <DefaultText style={{
                    fontFamily: 'berkshireswash',
                    fontSize: 48,
                    color: isFocused ? colors.font : colors.gray
                }}>W</DefaultText>,
                widthWhenTabIsActive: normalizeWidth(TAB_WIDTH) / 1.05
            }

        case "BounceBack":
            return {
                textProperties: {
                    color: colors.darkBlue,
                    fontFamily: 'gibson',
                    fontSize: 24
                },
                icon: isFocused ? <Image source={require('../../assets/Icons/BounceBack.png')} style={[styles.iconImage, {
                    width: normalizeWidth(TAB_BAR_HEIGHT - 15),
                    height: normalizeHeight(TAB_BAR_HEIGHT - 15),}]}
                    />
                    : <Image source={require('../../assets/Icons/BounceBack_Gray.png')} style={[styles.iconImage, {
                        width: normalizeWidth(TAB_BAR_HEIGHT - 15),
                        height: normalizeHeight(TAB_BAR_HEIGHT - 15),}]}
                        />,
                widthWhenTabIsActive: normalizeWidth(TAB_WIDTH) / 1.2
            }

        case "Health Advisor":
            return {
                textProperties: {
                    color: colors.lightGreen,
                    fontFamily: 'impact'
                },
                icon: isFocused ? <Image source={require('../../assets/Icons/Health_Advisor.png')} style={[styles.iconImage, {
                    width: normalizeWidth(TAB_BAR_HEIGHT - 15),
                    height: normalizeHeight(TAB_BAR_HEIGHT - 15),}]}
                    />
                    : <Image source={require('../../assets/Icons/Health_Advisor_Gray.png')} style={[styles.iconImage, {
                        width: normalizeWidth(TAB_BAR_HEIGHT - 15),
                        height: normalizeHeight(TAB_BAR_HEIGHT - 15),}]}
                        />,
                widthWhenTabIsActive: normalizeWidth(TAB_WIDTH)
            }
    }
}

const styles = StyleSheet.create({
    iconImage: {

    },
})