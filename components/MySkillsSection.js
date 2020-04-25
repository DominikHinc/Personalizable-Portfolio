import React from 'react'
import { StyleSheet, View } from 'react-native'
import { headerMainStyle, sectionHeaderStyle, standardText } from '../constants/FontStyles'
import { mySkills } from '../constants/PersonalData/MySkills'
import { normalizeMarginSize, normalizePaddingSize, normalizeWidth } from '../helpers/normalize'
import DefaultText from './DefaultText'

// This component is used in Presentation
// It utilizes data from MySkills.js file

const MySkillsSection = () => {
    const renderSkillsColumn = () => {
        return mySkills.map(item => {
            return <View key={item.title} style={[styles.skillsColumn, {maxWidth: normalizeWidth(270),marginVertical: normalizeMarginSize(15)}]}>
                <DefaultText style={sectionHeaderStyle}>{item.title}</DefaultText>
                {renderSkillsRow(item.skills)}
            </View>
        })
    }

    const renderSkillsRow = (skills) => {
        return skills.map(item => {
            return <DefaultText key={item} style={standardText}>- {item}</DefaultText>
        })
    }

    return (
        <View style={[styles.mainSkillsContainer, {paddingHorizontal: normalizePaddingSize(50)}]}>
            <DefaultText style={{ ...headerMainStyle, marginTop: normalizeMarginSize(50) }}>My skills</DefaultText>
            <View style={styles.innerSkillsContainer}>
                {renderSkillsColumn()}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    mainSkillsContainer: {
        width: '100%',
        alignItems: 'center',

    },
    innerSkillsContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',

    },
    skillsColumn: {
        width: '80%',
        
        alignItems: 'center'
    }
})


export default MySkillsSection
