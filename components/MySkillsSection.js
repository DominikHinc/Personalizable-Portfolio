import React, { useContext } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { ColorsContext } from '../helpers/ColorsContext'
import { mySkills } from '../constants/PersonalData/MySkills'
import DefaultText from './DefaultText'
import { headerMainStyle, standardBoldText, standardText, sectionHeaderStyle } from '../constants/FontStyles'
import { normalizeMarginSize, normalizePaddingSize, normalizeWidth } from '../helpers/normalize'


const MySkillsSection = () => {

    const { colors } = useContext(ColorsContext)
    const verticalView = Dimensions.get('window').height / Dimensions.get('window').width > 1;


    const renderSkillsColumn = () => {
        return mySkills.map(item => {
            return <View key={item.title} style={[styles.skillsColumn]}>
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
        <View style={styles.mainSkillsContainer}>
            <View style={styles.innerSkillsContainer}>
                {renderSkillsColumn()}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    mainSkillsContainer: {

        paddingHorizontal: normalizePaddingSize(50),
        width:'100%',
        alignItems:'center',
       
    },
    innerSkillsContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent:'center',
       
    },
    skillsColumn: {
        width:'80%',
        maxWidth:normalizeWidth(270),
        marginVertical:normalizeMarginSize(15),
        alignItems:'center'
    }
})


export default MySkillsSection
