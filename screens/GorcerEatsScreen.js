import React, { useContext } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, Platform } from 'react-native'
import Colors from '../constants/Colors'
import { ColorsContext } from '../helpers/ColorsContext'
import TextWithGifSection from '../components/TextWithGifSection'
import { TAB_BAR_HEIGHT } from '../constants/TABBAR'
import { useSafeArea } from 'react-native-safe-area-context'

const GrocerEatsScreen = (props) => {
    const { colors } = useContext(ColorsContext)

    const insets = useSafeArea();

    const snapArray = [
        0,
        Dimensions.get('window').height - TAB_BAR_HEIGHT,
        (Dimensions.get('window').height - TAB_BAR_HEIGHT)*2,
        (Dimensions.get('window').height - TAB_BAR_HEIGHT)*3,
        (Dimensions.get('window').height - TAB_BAR_HEIGHT)*4
    ]

    //snapToInterval={Platform.OS === 'android' || Platform.OS === 'ios' ? Dimensions.get('window').height - TAB_BAR_HEIGHT : undefined}
    //pagingEnabled={Platform.OS === 'web' ? true : false}
    return (
        <View style={[styles.screen, { backgroundColor: colors.background }]}>
            <ScrollView style={[styles.scrollView, {marginTop:TAB_BAR_HEIGHT + insets.top}]} contentContainerStyle={styles.scrollViewContainer} >
                <TextWithGifSection gifPath={require('../assets/Gifs/GrocerEats/StandardSearch.gif')} title="About project"
                    text={"This project is for sure the one I put most of my heart into."} />
                <TextWithGifSection gifPath={require('../assets/Gifs/GrocerEats/AddingToGroceryList.gif')} title="Time in development" reverseOrder={true}
                    text={"This project is for sure the one I put most of my heart into."} />
                <TextWithGifSection gifPath={require('../assets/Gifs/GrocerEats/Preparation.gif')} title="History"
                    text={"This project is for sure the one I put most of my heart into."} />
                <TextWithGifSection gifPath={require('../assets/Gifs/GrocerEats/IngredientsSearch.gif')} title="What I knew before starting this project"reverseOrder={true}
                    text={"This project is for sure the one I put most of my heart into."} />
                <TextWithGifSection gifPath={require('../assets/Gifs/GrocerEats/GroceryList.gif')} title="What I learned from creating this project"
                    text={"This project is for sure the one I put most of my heart into."} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,

    },
    scrollView:{
        
        width:'100%'
    },
    scrollViewContainer:{
        
    }
})


export default GrocerEatsScreen
