import React, { useContext } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import AboutMe from '../constants/PersonalData/TextComponents/AboutMe'
import MyCodingHistory from '../constants/PersonalData/TextComponents/MyCodingHistory'
import { ColorsContext } from '../helpers/ColorsContext'
import { normalizePaddingSize } from '../helpers/normalize'
import MySkillsSection from './MySkillsSection'
import MyProjectsSection from './MyProjectsSection'

//This component is placed at the bottom of HomeScreen

const Presentation = ({ navigation }) => {

    const { colors } = useContext(ColorsContext)
    const verticalView = Dimensions.get('window').height / Dimensions.get('window').width > 1;

    return (
        <View >



            <View style={[styles.sectionMainContainer, {  paddingHorizontal: verticalView ? '5%' : '24%', paddingVertical: normalizePaddingSize(20) }]}>
                <AboutMe />

                <MySkillsSection />
            </View>
            <View style={[styles.myProjectsContainer, { paddingTop: normalizePaddingSize(20)}]}>
                <MyProjectsSection navigation={navigation} />
            </View>
            <View style={[styles.sectionMainContainer, { backgroundColor: colors.second, paddingHorizontal: verticalView ? '5%' : '24%', paddingVertical: normalizePaddingSize(30) }]}>
                <MyCodingHistory />
            </View>


        </View>
    )
}


const styles = StyleSheet.create({
    sectionMainContainer: {

    }
})


export default Presentation
