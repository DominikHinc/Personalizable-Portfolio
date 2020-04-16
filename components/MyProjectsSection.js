import React, { useContext } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native'
import DefaultText from './DefaultText'
import { normalizeWidth, normalizeHeight, normalizeBorderRadiusSize, normalizePaddingSize, normalizeIconSize, normalizeMarginSize } from '../helpers/normalize'
import Colors from '../constants/Colors'
import { headerMainStyle, headerSecondaryStyle, sectionHeaderStyle, standardText, standardBoldText } from '../constants/FontStyles'
import { Linking } from 'expo'
import { ColorsContext } from '../helpers/ColorsContext'
import { projectsOverview } from '../constants/PersonalData/ProjectsOverview'
import { AntDesign } from "@expo/vector-icons"


const renderProjectRows = (item) => {
    return item.map(row => {
        return <View style={[styles.shortDescriptionContainer, styles.section]}>
            <DefaultText style={sectionHeaderStyle}>{row.title}</DefaultText>
            <DefaultText style={standardText}>{row.text}</DefaultText>
        </View>
    })
}
const renderProject = (navigation) => {
    const { colors } = useContext(ColorsContext)
    return projectsOverview.map(item => {
        return (
            <View key={item.title} style={[styles.tabMainContainer, { backgroundColor: colors.second }]}>
                {item.specialLabel !== undefined &&
                    <View style={[styles.specialLabelContainer, { backgroundColor: colors.third }]}><DefaultText style={{ fontWeight: 'bold', fontSize: 20 }}>{item.specialLabel}</DefaultText></View>}
                <View style={styles.projectImageContainer}>
                    <Image style={styles.projectImage} source={item.image} resizeMode="contain" />
                </View>
                <View style={[styles.titleContainer, styles.section]}>
                    <DefaultText style={headerSecondaryStyle}>{item.title}</DefaultText>
                </View>
                {renderProjectRows(item.content)}
                <View style={[styles.navigationContainer]}>
                    <DefaultText style={sectionHeaderStyle}>Go to:</DefaultText>
                    <View style={styles.navigationButtonsContainer}>
                        <View style={styles.naviagtionButton}>
                            <TouchableOpacity style={{ flex: 1 }} onPress={() => { Platform.OS === 'web' ? window.open(item.buttonConfig.link) : Linking.openURL(item.buttonConfig.link) }}>
                                <View>
                                    <DefaultText style={{ ...standardText, color: colors.blue }}>{item.buttonConfig.title}</DefaultText>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.naviagtionButton}>
                            <TouchableOpacity style={{ flex: 1 }} onPress={() => { navigation.navigate(item.title) }}>
                                <View>
                                    <DefaultText style={{ ...standardText, color: colors.blue }}>Project's page</DefaultText>
                                </View>
                            </TouchableOpacity>
                        </View>
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
        marginHorizontal: '10%',
        marginVertical: '5%',
        alignItems: 'center',
        overflow: 'hidden'
    },
    specialLabelContainer: {
        position: 'absolute',
        top: normalizeMarginSize(20),
        right: normalizeMarginSize(-45),
        transform: [{ rotate: '45deg' }],
        paddingVertical: normalizePaddingSize(10),
        width: normalizeWidth(185),
        alignItems: 'center'
    },
    projectImageContainer: {
        width: '80%',
        height: normalizeHeight(200),
        marginTop: '8%',
        overflow: 'hidden',

    },
    projectImage: {
        // height: '100%',
        // width: '100%',
        height: normalizeHeight(200),
        width: '100%',

    },
    section: {
        paddingVertical: normalizePaddingSize(20),
        paddingHorizontal: '5%'
    },
    navigationContainer: {

        width: '100%',

    },
    navigationButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    naviagtionButton: {
        width: '40%',
        marginHorizontal: '5%',
        marginBottom: '5%'
    }
})


export default MyProjectsSection
