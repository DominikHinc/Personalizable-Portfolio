import React, { useContext } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, Platform } from 'react-native'
import Colors from '../constants/Colors'
import { ColorsContext } from '../helpers/ColorsContext'
import TextWithGifSection from '../components/TextWithGifSection'
import { TAB_BAR_HEIGHT } from '../constants/TABBAR'
import { useSafeArea } from 'react-native-safe-area-context'
import ProjectDetailsTemplate from '../components/ProjectDetailsTemplate'
import Footer from '../components/Footer'
import { BounceBackDetails } from '../constants/ProjectsDetails/BounceBack'


const BounceBackScreen = (props) => {
    const {colors} = useContext(ColorsContext)

    const insets = useSafeArea();
    return (
        <View style={[styles.screen, {backgroundColor:colors.background}]}>
            <ScrollView style={[styles.scrollView, {marginTop:TAB_BAR_HEIGHT + insets.top}]} contentContainerStyle={styles.scrollViewContainer} >
                <ProjectDetailsTemplate data={BounceBackDetails} />
                <Footer/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        
    },
    scrollView:{
        
        width:'100%'
    },
})


export default BounceBackScreen
