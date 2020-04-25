import React, { useContext } from 'react'
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context'
import ContactForm from '../components/ContactForm'
import ContactInfo from '../components/ContactInfo'
import Footer, { FOOTER_HEIGHT } from '../components/Footer'
import { TAB_BAR_HEIGHT } from '../constants/TAB_BAR'
import { ColorsContext } from '../helpers/ColorsContext'
import { normalizeHeight, normalizeMarginSize, normalizePaddingSize } from '../helpers/normalize'


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
        <View style={[styles.screen, { backgroundColor: colors.first }]}>
            <ScrollView style={[styles.scrollView, { marginTop: normalizeMarginSize(TAB_BAR_HEIGHT) + insets.top,  }]}
            contentContainerStyle={{paddingBottom:normalizeHeight(FOOTER_HEIGHT)}}>
                <View style={[styles.contactContainer, { flexDirection: verticalView ? 'column' : 'row',backgroundColor: colors.first, 
                minHeight: Dimensions.get('window').height - normalizeMarginSize(TAB_BAR_HEIGHT) - insets.top }]}>
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
