import React, { useContext } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { headerMainStyle, standardBoldText, standardText } from '../constants/FontStyles'
import { ColorsContext } from '../helpers/ColorsContext'
import { normalizeMarginSize, normalizePaddingSize } from '../helpers/normalize'
import DefaultText from './DefaultText'
import MySkillsSection from './MySkillsSection'
import AboutMe from '../constants/PersonalData/TextComponents/AboutMe'
import MyCodingHistory from '../constants/PersonalData/TextComponents/MyCodingHistory'

//This component is placed at the bottom of HomeScreen

const Presentation = ({ }) => {

    const { colors } = useContext(ColorsContext)
    const verticalView = Dimensions.get('window').height / Dimensions.get('window').width > 1;

    return (
        <View style={[styles.sectionMainContainer, { backgroundColor: colors.second, paddingHorizontal: verticalView ? '5%' : '20%', paddingVertical: normalizePaddingSize(20) }]}>

            <AboutMe />

            <MySkillsSection/>

            <MyCodingHistory />

        </View>
    )
}


const styles = StyleSheet.create({
    sectionMainContainer: {
        
    }
})


export default Presentation
