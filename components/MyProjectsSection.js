import React, { useContext } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native'
import DefaultText from './DefaultText'
import { normalizeWidth, normalizeHeight, normalizeBorderRadiusSize, normalizePaddingSize, normalizeIconSize, normalizeMarginSize } from '../helpers/normalize'
import Colors from '../constants/Colors'
import { headerMainStyle, headerSecondaryStyle, sectionHeaderStyle, standardText, standardBoldText } from '../constants/FontStyles'
import { Linking } from 'expo'
import { ColorsContext } from '../helpers/ColorsContext'
import { projectsOverview } from '../constants/ProjectsOverview'
import {AntDesign} from "@expo/vector-icons"




const renderProject = (navigation) => {
    const { colors } = useContext(ColorsContext)
    return projectsOverview.map(item => {
        return (
            <View key={item.title} style={[styles.tabMainContainer, { backgroundColor: colors.second }]}>
                {item.specialLabel !== undefined && 
                <View style={[styles.specialLabelContainer, {backgroundColor:colors.third}]}><DefaultText style={{fontWeight:'bold', fontSize:20}}>{item.specialLabel}</DefaultText></View>}
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
                    <DefaultText style={sectionHeaderStyle}>Go to:</DefaultText>
                    <View style={styles.navigationButtonsContainer}>
                        <View style={styles.naviagtionButton}>
                            <TouchableOpacity style={{ flex: 1 }} onPress={() => {Platform.OS === 'web' ? window.open(item.link) : Linking.openURL(item.link) }}>
                                <View>
                                    <DefaultText style={{...standardText, color:colors.blue}}>Play Store</DefaultText>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.naviagtionButton}>
                            <TouchableOpacity style={{ flex: 1 }} onPress={() => { navigation.navigate(item.title) }}>
                                <View>
                                    <DefaultText style={{...standardText, color:colors.blue}}>Project's page</DefaultText>
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
        overflow:'hidden'
    },
    specialLabelContainer:{
        position:'absolute',
        top:normalizeMarginSize(20),
        right:normalizeMarginSize(-45),
        transform:[{rotate:'45deg'}],
        paddingVertical:normalizePaddingSize(10),
        width:normalizeWidth(185),
        alignItems:'center'
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
        height:normalizeHeight(200),
        width: '100%',
        
    },
    section: {
        paddingVertical: normalizePaddingSize(20),
        paddingHorizontal: '5%'
    },
    navigationContainer: {
        
        width: '100%',
        
    },
    navigationButtonsContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    naviagtionButton:{
        width: '40%', 
        marginHorizontal: '5%', 
        marginBottom:'5%' 
    }
})


export default MyProjectsSection
