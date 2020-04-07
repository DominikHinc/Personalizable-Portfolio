import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, ImageBackground, Dimensions } from 'react-native'
import Colors from '../constants/Colors'
import { TAB_BAR_HEIGHT, TAB_BAR_REAL_HEIGHT } from '../constants/TABBAR'
import { normalizeHeight, normalizePaddingSize } from '../helpers/normalize'
import DefaultText from '../components/DefaultText'
import { headerMainStyle, headerSecondaryStyle } from '../constants/FontStyles'
import MyProjectsSection from '../components/MyProjectsSection'

const HEADER_HEIGHT = normalizeHeight(500)

const HomeScreen = (props) => {
    console.log(Dimensions.get('window').width)
    return (
        <View style={styles.screen}>
            <View style={styles.headerView}>
                <ImageBackground style={styles.headerImage} source={require("../assets/Images/HeaderGrayBackground.jpg")}>
                    <DefaultText style={headerMainStyle}>Hey there, I'm Dominik Hinc</DefaultText>
                    <DefaultText style={headerSecondaryStyle}>I'm mobile app developer</DefaultText>
                </ImageBackground>

            </View>
            <ScrollView style={styles.screenScrollView} contentContainerStyle={styles.scrollViewInnerContainer}>
                <View style={styles.screenUseableContainer}>
                    <View style={styles.projectsSectionTitleContainer}>
                        <DefaultText style={headerSecondaryStyle}>My Projects:</DefaultText>
                    </View>
                    <View style={styles.projectsSectionContainer}>
                        <MyProjectsSection navigation={props.navigation} />
                    </View>


                    <View style={{ height: 1000 }}></View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.primary

    },
    headerView: {
        height: HEADER_HEIGHT,
        width: '100%',
        backgroundColor: Colors.tertiary,
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
        marginTop: TAB_BAR_HEIGHT,
    },
    scrollViewInnerContainer: {
        paddingTop: HEADER_HEIGHT,

    },
    screenUseableContainer: {
        flex: 1,
        backgroundColor: Colors.primary,
    },
    projectsSectionContainer:{
        flex:1,
        paddingTop:normalizePaddingSize(20)
    }, 
    projectsSectionTitleContainer:{
        width:'100%',
        alignItems:'center'
    }
})


export default HomeScreen
