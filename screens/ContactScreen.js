import React, { useContext } from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native'
import Colors from '../constants/Colors'
import { ColorsContext } from '../helpers/ColorsContext'
import ContactForm from '../components/ContactForm'
import { useSafeArea } from 'react-native-safe-area-context'
import { normalizeMarginSize, normalizePaddingSize, normalizeHeight } from '../helpers/normalize'
import { TAB_BAR_HEIGHT } from '../constants/TAB_BAR'
import ContactInfo from '../components/ContactInfo'
import Footer, { FOOTER_HEIGHT } from '../components/Footer'


const ContactScreen = (props) => {
    const { colors } = useContext(ColorsContext)

    const insets = useSafeArea();

    const verticalView = Dimensions.get('window').height / Dimensions.get('window').width > 1;

    const contactPositionDynamicProperties = {
        width: verticalView ? '100%' : '50%',
        height: verticalView ? null : Dimensions.get('window').height - normalizeMarginSize(TAB_BAR_HEIGHT) - insets.top,
        padding: verticalView ? normalizePaddingSize(30) : null,
        justifyContent: 'center'
    }

    return (
        <View style={[styles.screen, { backgroundColor: colors.background }]}>
            <ScrollView style={[styles.scrollView, { marginTop: normalizeMarginSize(TAB_BAR_HEIGHT) + insets.top,  }]}
            contentContainerStyle={{paddingBottom:normalizeHeight(FOOTER_HEIGHT)}}>
                <View style={[styles.contactContainer, { flexDirection: verticalView ? 'column' : 'row',backgroundColor: colors.first }]}>
                    <View style={{ ...contactPositionDynamicProperties }} >

                        <ContactForm />

                    </View>
                    <View style={{ ...contactPositionDynamicProperties }}>

                        <ContactInfo />

                    </View>
                </View>
            </ScrollView>
            
            <Footer absolute={true} />
            
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },

    scrollView: {
        width: '100%'
    },
    contactContainer: {


    }
})


export default ContactScreen
