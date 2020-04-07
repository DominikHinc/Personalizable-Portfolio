import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import DefaultText from './DefaultText'
import { normalizeWidth, normalizeHeight, normalizeBorderRadiusSize, normalizePaddingSize } from '../helpers/normalize'
import Colors from '../constants/Colors'
import { headerMainStyle, headerSecondaryStyle, sectionHeaderStyle, standardText } from '../constants/FontStyles'
import { Linking } from 'expo'



const projectsOverview = [
    {
        title: "GrocerEats",
        shortDescription: "GrocerEats provides easy access to Spoonacular API meal recipes and integrates it with simple to use grocery list.",
        image: require('../assets/Icons/GrocerEats.png'),
        languages: "JavaScript ES6/ES7/ES8, JSX, SQLite",
        frameworks: "React Native, React, Expo",
        techonologies: "redux, react-redux, redux-thunk, expo-sqlite, react-reanimated, react-navigation, REST API",
        tools: "version control, react-native-debugger",
        link: "https://play.google.com/store/apps/details?id=pl.dominik.hinc.grocereats"
    },
    {
        title: "WordFishing",
        shortDescription: "WordFishing makes learning english vocabulary from textbooks easy for polish students.",
        image: require('../assets/Icons/WordFishing.png'),
        languages: "Java",
        frameworks: "LibGDX",
        techonologies: "Scene2D, Android Push Notifications, Local Android Storage management",
        tools: "version control, Gradle, Android Studio, Skin Composer",
        link: "https://play.google.com/store/apps/details?id=pl.dominikhinc.wordfishing"
    },
    {
        title: "Health Advisor",
        shortDescription: "Health Advisor uses provided biometric and demographic data to search the same medical references used by healthcare professionals.",
        image: require('../assets/Icons/Health_Advisor.png'),
        languages: "JavaScript ES6/ES7/ES8, JSX",
        frameworks: "React Native, React, Expo",
        techonologies: "redux, react-redux, react-reanimated, react-navigation, validate.js, REST API",
        tools: "version control, react-native-debugger",
        link: "https://play.google.com/store/apps/details?id=pl.dominik.hinc.grocereats"
    },

    {
        title: "BounceBack",
        shortDescription: "BounceBack is a game with similar rules to \"Don't touch the spikes\", but enriched with additional visual effects and with some differences in gameplay.",
        image: require('../assets/Icons/BounceBack.png'),
        languages: "Java",
        frameworks: "LibGDX",
        techonologies: "Box2D, Scene2D, Box2Dlight, Local Android Storage management",
        tools: "version control, Gradle, Android Studio, 2D Particle editor, Skin Composer",
        link: "https://play.google.com/store/apps/details?id=pl.dominik.hinc.bounceback"
    }
]

const renderProject = (navigation) => {
    return projectsOverview.map(item => {
        return (
            <View style={styles.tabMainContainer}>
                <View style={styles.projectImageContainer}>
                    <Image style={styles.projectImage} source={item.image} resizeMode="contain" />
                </View>
                <View style={[styles.titleContainer, styles.section]}>
                    <DefaultText style={headerSecondaryStyle}>{item.title}</DefaultText>
                </View>
                <View style={[styles.shortDescriptionContainer, styles.section]}>
                    <DefaultText style={sectionHeaderStyle}>Short description:</DefaultText>
                    <DefaultText style={standardText}>{item.shortDescription}</DefaultText>
                </View>
                <View style={[styles.languagesContainer, styles.section]}>
                    <DefaultText style={sectionHeaderStyle}>{`Language${item.languages !== "Java" ? "s" : ""} used:`}</DefaultText>
                    <DefaultText style={standardText}>{item.languages}</DefaultText>
                </View>
                <View style={[styles.frameworksContainer, styles.section]}>
                    <DefaultText style={sectionHeaderStyle}>{`Framework${item.frameworks !== "LibGDX" ? "s" : ""} used:`}</DefaultText>
                    <DefaultText style={standardText}>{item.frameworks}</DefaultText>
                </View>
                <View style={[styles.techonologiesContainer, styles.section]}>
                    <DefaultText style={sectionHeaderStyle}>Techonologies used:</DefaultText>
                    <DefaultText style={standardText}>{item.techonologies}</DefaultText>
                </View>
                <View style={[styles.toolsContainer, styles.section]}>
                    <DefaultText style={sectionHeaderStyle}>Tools used:</DefaultText>
                    <DefaultText style={standardText}>{item.tools}</DefaultText>
                </View>
                <View style={[styles.navigationContainer]}>
                    <View style={{ width: '40%', margin:'5%' }}>
                        <TouchableOpacity style={{ flex: 1 }} onPress={() => { window.open(item.link)}}>
                            <View>
                                <DefaultText style={sectionHeaderStyle}>Go to Google Play Store</DefaultText>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '40%', margin:'5%' }}>
                        <TouchableOpacity style={{ flex: 1 }} onPress={() => { navigation.navigate(item.title) }}>
                            <View>
                                <DefaultText style={sectionHeaderStyle}>Go to project's page 🡢  </DefaultText>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
        )
    })
}

const MyProjectsSection = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.projectsTable}>
                {renderProject(navigation)}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        alignItems: 'center'
    },
    projectsTable: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabMainContainer: {
        width: "80%",
        maxWidth: normalizeWidth(400),
        borderRadius: normalizeBorderRadiusSize(50),
        backgroundColor: Colors.tertiary,
        marginHorizontal: '10%',
        marginVertical: '5%',
        alignItems: 'center'
    },
    projectImageContainer: {
        width: '80%',
        height: normalizeHeight(200),
        marginTop: '8%',
        borderRadius: normalizeBorderRadiusSize(50),
        overflow: 'hidden',

    },
    projectImage: {
        height: '100%',
        width: '100%'
    },
    section: {
        paddingVertical: normalizePaddingSize(20),
        paddingHorizontal: '5%'
    },
    navigationContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    }
})


export default MyProjectsSection
