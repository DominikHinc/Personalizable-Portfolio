import { Ionicons } from '@expo/vector-icons'
import React, { useContext } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { headerSecondaryStyle, sectionHeaderStyle, standardText } from '../constants/FontStyles'
import { projectsOverview } from '../constants/PersonalData/ProjectsOverview'
import { ColorsContext } from '../helpers/ColorsContext'
import { normalizeBorderRadiusSize, normalizeHeight, normalizeMarginSize, normalizePaddingSize, normalizeWidth } from '../helpers/normalize'
import DefaultText from './DefaultText'
import ProjectLinks from './ProjectLinks'

// This component is used in HomeScreen
// It utilizes data from ProjectsOverview.js file

const renderProjectRows = (item) => {
    return item.map(row => {
        return <View key={row.title} style={[styles.shortDescriptionContainer, styles.section, { paddingVertical: normalizePaddingSize(20) }]}>
            <DefaultText style={sectionHeaderStyle}>{row.title}</DefaultText>
            <DefaultText style={standardText}>{row.text}</DefaultText>
        </View>
    })
}
const renderProject = (navigation) => {
    const { colors } = useContext(ColorsContext)
    return projectsOverview.map(item => {
        return (
            <View key={item.title} style={[styles.tabMainContainer, { backgroundColor: colors.second, maxWidth: normalizeWidth(400), borderRadius: normalizeBorderRadiusSize(50) }]}>
                {item.specialLabel !== undefined &&
                    <View style={[styles.specialLabelContainer, {
                        backgroundColor: colors.third, top: normalizeMarginSize(20), right: normalizeMarginSize(-45),
                        paddingVertical: normalizePaddingSize(10), width: normalizeWidth(185),
                    }]}>
                        <DefaultText style={{ fontWeight: 'bold', fontSize: 20 }}>{item.specialLabel}</DefaultText>
                    </View>}
                <View style={[styles.projectImageContainer, { height: normalizeHeight(200), }]}>
                    <Image style={[styles.projectImage, { height: normalizeHeight(200) }]} source={item.image} resizeMode="contain" />
                </View>
                <View style={[styles.titleContainer, styles.section, { paddingVertical: normalizePaddingSize(20) }]}>
                    <DefaultText style={headerSecondaryStyle}>{item.title}</DefaultText>
                </View>
                {renderProjectRows(item.content)}
                <View style={[styles.navigationContainer]}>
                    <DefaultText style={sectionHeaderStyle}>Go to:</DefaultText>
                    <ProjectLinks buttons={[{title:"Project's page", icon:<Ionicons  name="md-list-box" size={45}/>, onPress:()=>navigation.navigate(item.title)},...item.buttons]}/>
                </View>

            </View>
        )
    })
}

const MyProjectsSection = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.projectsSectionTitleContainer}>
                <DefaultText style={headerSecondaryStyle}>My Projects:</DefaultText>
            </View>
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
    projectsSectionTitleContainer: {
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

        marginHorizontal: '10%',
        marginVertical: '5%',
        alignItems: 'center',
        overflow: 'hidden'
    },
    specialLabelContainer: {
        position: 'absolute',

        transform: [{ rotate: '45deg' }],

        alignItems: 'center'
    },
    projectImageContainer: {
        width: '80%',

        marginTop: '8%',
        overflow: 'hidden',

    },
    projectImage: {

        width: '100%',

    },
    section: {

        paddingHorizontal: '5%'
    },
    navigationContainer: {

        width: '100%',

    },
    navigationButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    navigationButton: {
        width: '40%',
        marginHorizontal: '5%',
        marginBottom: '5%'
    }
})


export default MyProjectsSection
