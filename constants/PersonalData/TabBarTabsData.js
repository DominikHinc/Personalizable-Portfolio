import { Entypo, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import DefaultText from '../../components/DefaultText';
import { TAB_WIDTH, TAB_BAR_HEIGHT } from '../TABBAR';
import { normalizeFontSize, normalizeIconSize, normalizeWidth, normalizeHeight } from '../../helpers/normalize';



//Here you can set properties related to tabs that are located on top of the screen
//Every object should be named the same as title given in ProjectsOverview.js file


export const getTabBarTabsData = (label, isFocused, colors) => {
    switch (label) {
        case "Home":
            return {
                textProperties: {
                    fontFamily: 'sofia-bold',
                    color: colors.font
                },
                icon: <Entypo name="home" size={normalizeIconSize(48)} color={isFocused ? colors.font : colors.gray} />,
                widthWhenTabIsActive:TAB_WIDTH / 2
            }

        case "Contact":
            return {
                textProperties: {
                    fontFamily: 'sofia-bold',
                    color: colors.font
                },
                icon: <MaterialIcons name='contact-mail' size={normalizeIconSize(48)} color={isFocused ? colors.font : colors.gray} />,
                widthWhenTabIsActive:TAB_WIDTH / 1.5
                
            }

        case "GrocerEats":
            return {
                textProperties: {
                    fontFamily: 'coiny',
                    color: colors.blue
                },
                icon: isFocused ? <Image source={require('../../assets/Icons/GrocerEats.png')} style={styles.iconImage} />
                    : <Image source={require('../../assets/Icons/GrocerEats_Gray.png')} style={styles.iconImage} />,
                    widthWhenTabIsActive:TAB_WIDTH / 1.15
            }

        case "WordFishing":
            return {
                textProperties: {
                    fontFamily: 'berkshireswash',
                    fontSize: normalizeFontSize(18),
                    color: colors.font,
                    tilte:"WORDFISHING"
                },
                icon: <DefaultText style={{
                    fontFamily: 'berkshireswash',
                    fontSize: normalizeFontSize(48),
                    color: isFocused ? colors.font : colors.gray
                }}>W</DefaultText>,
                widthWhenTabIsActive:TAB_WIDTH / 1.05
            }

        case "BounceBack":
            return {
                textProperties: {
                    color: colors.darkBlue,
                    fontFamily: 'gibson',
                    fontSize: normalizeFontSize(24)
                },
                icon: isFocused ? <Image source={require('../../assets/Icons/BounceBack.png')} style={styles.iconImage} />
                    : <Image source={require('../../assets/Icons/BounceBack_Gray.png')} style={styles.iconImage} />,
                widthWhenTabIsActive:TAB_WIDTH / 1.2
            }

        case "Health Advisor":
            return {
                textProperties: {
                    color: colors.lightGreen,
                    fontFamily: 'impact'
                },
                icon: isFocused ? <Image source={require('../../assets/Icons/Health_Advisor.png')} style={styles.iconImage} />
                    : <Image source={require('../../assets/Icons/Health_Advisor_Gray.png')} style={styles.iconImage} />,
                widthWhenTabIsActive:TAB_WIDTH
            }
    }
}

const styles = StyleSheet.create({
    iconImage: {
        width: TAB_BAR_HEIGHT - normalizeWidth(15),
        height: TAB_BAR_HEIGHT - normalizeHeight(15),

    },
    wordFishingImage: {
        width: TAB_WIDTH,
        height: TAB_WIDTH / 2
    }
})